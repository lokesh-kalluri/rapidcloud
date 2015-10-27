var fs                = require('fs'),
    computeManagement = require('azure-asm-compute');
	 //computeManagement = require('azure-mgmt-compute');

var computeManagementClient = computeManagement.createComputeManagementClient(computeManagement.createCertificateCloudCredentials({
  subscriptionId: '250d7492-80f2-4946-98cd-3bd6bcf93702',
  pem: fs.readFileSync('myCert.pem', 'utf-8')
}));

var serviceName = "cloudservice01";
var deploymentName = "deployment01";
var virualMachineName = "vm01";
var storageAccountName = "storage01";
var diskContainerName = "vhds";

// List all the virtual machine images you can use.
computeManagementClient.virtualMachineVMImages.list(function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.info(result);
  }
});

// Create a cloud service.
computeManagementClient.hostedServices.create({
  serviceName: serviceName,
  label: "cloud service 01",
  location: "West US"
}, function (err, result) {
  if (err) {
    console.error(err);
  } else {
    console.info(result);

    // Create a virtual machine in the cloud service.
    computeManagementClient.virtualMachines.createDeployment(serviceName, {
      name: deploymentName,
      deploymentSlot: "Production",
      label: "deployment 01",
      roles: [{
        roleName: virualMachineName,
        roleType: "PersistentVMRole",
        label: "virutal machine 01",
        oSVirtualHardDisk: {
          sourceImageName: "a699494373c04fc0bc8f2bb1389d6106__Windows-Server-2012-R2-201312.01-en.us-127GB.vhd",
          mediaLink: "http://"+ storageAccountName + ".blob.core.windows.net/" + diskContainerName + "/" +
            serviceName + "-" + virualMachineName + "-" + Math.floor((Math.random()*100)+1) + ".vhd"
        },
        dataVirtualHardDisks: [],
        configurationSets: [{
          configurationSetType: "WindowsProvisioningConfiguration",
          adminUserName: "Rapid_Cloud",
          adminPassword: "Boron12#4",
          computerName: virualMachineName,
          enableAutomaticUpdates: true,
          resetPasswordOnFirstLogon: false,
          storedCertificateSettings: [],
          inputEndpoints: [],
          windowsRemoteManagement: {
            listeners: [{
              listenerType: "Https"
            }]
          }
        }, {
          configurationSetType: "NetworkConfiguration",
          subnetNames: [],
          storedCertificateSettings: [],
          inputEndpoints: [{
            localPort: 3389,
            protocol: "tcp",
            name: "RemoteDesktop"
          }, {
            localPort: 5986,
            protocol: "tcp",
            name: "WinRmHTTPS"
          }]
        }]
      }]
    }, function (err, result) {
      if (err) {
        console.error(err);
      } else {
        console.info(result);
      }
    });
  }
});