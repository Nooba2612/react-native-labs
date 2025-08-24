abstract class Appliance {
    abstract turnOn(): void;
}

class Fan extends Appliance {
    turnOn(): void {
        console.log("Quạt đã được bật, quay mát rượi ");
    }
}

class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Máy lạnh đã được bật, phòng mát lạnh ");
    }
}

const fan: Appliance = new Fan();
fan.turnOn();

const ac: Appliance = new AirConditioner();
ac.turnOn();
