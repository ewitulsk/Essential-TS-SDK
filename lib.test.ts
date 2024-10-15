import {EssentialClient} from "./lib"

const LOCAL_SERVER = "http://0.0.0.0:61576"

test('Can call get contracts', async () => {
    let essential = new EssentialClient(LOCAL_SERVER)
    
    const data = await essential.getContracts("E0A7FDF20641D153A45FC6636645B271E28356FAECFBDF8E28155540022D8F9E");

    console.log(data)
    //ToDo: Actual testing
  });
  

test('Can call list contracts', async () => {
    let essential = new EssentialClient(LOCAL_SERVER)

    const data = await essential.listContracts();

    console.log(data)
    //ToDo: Actual testing
});