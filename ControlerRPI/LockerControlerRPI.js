//Import LockerDoor Class
let LockerN1 = require('../Class/LockerDoor')

const Stade = () => LockerN1.GetStade();
console.log('LockerControler   ' + Stade());
let Locker = []

const LocketStadeUpdate = () => {
    let IdLocker = LockerN1.LockerNumero1.IdLocker;
    let Idcasillero = LockerN1.LockerNumero1.Idcasillero;
    let IdEstadoPuerta = LockerN1.GetStade();
    let IdEstadoPrestamo = 'Rented';

    Locker = [
        { IdLocker: IdLocker, Idcasillero: Idcasillero, IdEstadoPuerta: IdEstadoPuerta, IdEstadoPrestamo: IdEstadoPrestamo },
        { IdLocker: 2, Idcasillero: 001, IdEstadoPuerta: 'Close', IdEstadoPrestamo: 'available' }];

    return Locker;
}

const LockerOpenDoor =(IdLocker)=>{
    if (IdLocker === 1) { LockerN1.Opendoor(); }
    
    return;
}


module.exports = {
    LocketStadeUpdate,
    LockerOpenDoor
}