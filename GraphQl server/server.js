const Realm = require("realm")
const BSON = require('bson')
const app = new Realm.App({id:'test-nxczp'})
handleLogin();
run();

 const TestSchema = {
  name: 'Test',
  properties: {
    _id: 'objectId',
    Msg: 'string'
  },
  title:"Test"
};
async function run(){

  await app.logIn(new Realm.Credentials.anonymous());
  
  
  const realm = await Realm.open({
    schema: [TestSchema]
});

realm.write(() => {
  const newTask = realm.create("Test", {
    _id: new BSON.ObjectID(),
    Msg: "Esto es  OTRO TEST",

    });
});

// const test = realm.objects('test')


//to use sync we need a 4.4 cluster on MongoDb , they are not free


}


async function handleLogin(){
    const credentials = Realm.Credentials.anonymous();
    console.log('hola')
     const user = await app.logIn(credentials);
       console.log(`Logged in with the user id: ${user.id}`);
}
run().catch(err => {
  console.error("Failed to log in:", err)
})

