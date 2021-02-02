export class Outlet {
    constructor( id: number, name: string, street: string, landmark: string, packets: number, type: number, vols: number)
    {
        this.Id = id;
        this.Name = name;
        this.Street = street;
        this.Landmark = landmark;
        this.AvailableFoodPackets = packets;
        this.FoodType = type;
        this.RequiredVolunteers = vols;
    }
    public Id: number;
    public Name: string;
    public Street: string;
    public Landmark: string;
    public AvailableFoodPackets: number;
    public FoodType: number;
    public RequiredVolunteers: number;
}

