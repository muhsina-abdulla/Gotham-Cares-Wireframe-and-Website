import { Component, Input, OnInit } from '@angular/core';
import { Outlet } from '../outlet.model';
import { OutletlistService } from '../outletlist.service';
import { Response_ } from '../response';
/**
 * This component displays the properties of a single outlet.
 *
 *  It has two buttons:
 * 1.Edit
 * 2.Delete
 * 
 * On clicking Edit editform component is loaded.
 * 
 * On clicking delete button an API call will be made to 'https://localhost:44319/{id}'
 * Based on the API responses one scenario out of the following will occur:
 * 1.If deletion is successful,'Outlet Deletion Successful' message will be shown.
 * 1.If deletion is not successful,'Outlet Deletion Not Successful,Try Again' message will be shown.
 *  
 * Members:
 * 1.outlet- An Outlet instance is taken as input to the component.
 * 2.response- A Response_ instance for storing the API response.
 * 3.edit- a variable set to false.It is set to true when the user clicks on Edit button.
 * 4.service- An instance of OutletlistService for making API calls.
 * 5.onEdit()-function to set the instance variable edit to true once the edit 
 *          button is clicked.
 */
@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css'],
  providers: [OutletlistService]
})
export class OutletComponent implements OnInit {
  @Input()
  outlet!: Outlet;
  response!: Response_;
  edit = false;
  constructor(private service: OutletlistService) { }
 
  ngOnInit(): void {
  }

   delete(outlet: Outlet): void{
    console.log('clicked');
    this.service.deleteOutlet(outlet).subscribe((response) => {
      this.response = response; 
      console.log(response);
    });
    window.alert(this.response.message);
  }

  onEdit(): void{
    this.edit = true;
  }

}
