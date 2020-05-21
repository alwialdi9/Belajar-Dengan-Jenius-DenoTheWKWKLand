interface Malware {
  IDMalware: string;
  getOSInformation(): void;
  infectStartup(): void;
}

interface Trojan {
  IDTrojan: string;
  keylogger(): void;
  screenlogger(): void;
}

interface Ransomware extends Malware {
  RansomwareVersion: string;
  encryptAllFiles(): void;
  extortion(): void;
}

class Virus implements Malware {
  public IDMalware: string;
  constructor(IDmalware: string) {
    this.IDMalware = IDmalware;
  }
  getOSInformation(): void {
    console.log("OS Windows : User Maudy");
  }
  infectStartup(): void {
    console.log("Startup OS Infected");
  }
  getIDMalware(): void {
    console.log(this.IDMalware);
  }
}

const exampleVirus1: Virus = new Virus("101");
exampleVirus1.getOSInformation();
exampleVirus1.infectStartup();
exampleVirus1.getIDMalware();

class Test {
}

class WannaCry extends Ransomware {
  public RansomwareVersion: string;
  public IDMalware: string;
  getOSInformation(): void {
    console.log("OS Windows : User Maudy");
  }
  infectStartup(): void {
    console.log("Startup OS Infected");
  }
  encryptAllFiles(): void {
    console.log("Encrypt All Files, Success");
  }
  extortion(): void {
    console.log("Send Bitcoin to : 8sdhshj6sgjhd&");
  }
}

const exampleVirus3: WannaCry = new WannaCry();
exampleVirus3.encryptAllFiles();
exampleVirus3.extortion();