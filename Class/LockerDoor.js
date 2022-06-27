//////////////////////////////////////////
///    control de apertura y cierre    ///
///         de puerta                 ///
////////////////////////////////////////
//       SE CREA LA CLASE CASILLERO  //
//////////////////////////////////////
const Gpio = require('onoff').Gpio;
class LockerClass {
    constructor({
        IdLocker,
        IdCaslliero,
        DoorState = 0,
        RentState = 0,
        GpioReadDoorNumber,
        GpioWriteDoorNumber

    }) {
        this.IdLocker = IdLocker;
        this.IdCaslliero = IdCaslliero;
        this.DoorState = DoorState;
        this.RentState = RentState;
        this.GpioReadDoorNumber = new Gpio(GpioReadDoorNumber, 'in', 'both');
        this.GpioWriteDoorNumber = new Gpio(GpioWriteDoorNumber, 'out');
    }
    //leer entrada
    ReadDoorState() {
        this.DoorState = this.GpioReadDoorNumber.readSync();
        //console.log("The Door " + this.IdLocker + "  Is:  " + (this.DoorState ? 'Close' : 'Open'));
        let Stade=this.DoorState ? 'Close' : 'Open'
        //console.log(Stade);
        return Stade;

    }

    OpendDoor() {
        let DoorOpen = this.GpioWriteDoorNumber;
        DoorOpen.writeSync(1);  // prender led
        console.log("Se ejecuta la apertura ");
        setTimeout(() => DoorOpen.writeSync(0), 3000);
        console.log("Se ejecuta el cierre ");
        return;
    };

}
////////////////////////////////////////////
//            Creacion de Objetos        //
//////////////////////////////////////////
const LockerNumero1 = new LockerClass(
    {
        IdLocker: 1,
        IdCaslliero: 1,
        GpioReadDoorNumber: 27,
        GpioWriteDoorNumber: 22
    })

  

let GetStade = ()=> LockerNumero1.ReadDoorState();
const Opendoor =()=> LockerNumero1.OpendDoor();


console.log(GetStade());
Opendoor();


module.exports = {
    GetStade,
    Opendoor,
    LockerNumero1
  }; 