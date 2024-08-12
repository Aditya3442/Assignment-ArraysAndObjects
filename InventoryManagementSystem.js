function addItem(inventory,item){
       inventory.push(item);
}
function updateItem(inventory,id,quant){
       inventory.map(obj=>{
        if(obj.id==id){
            obj.quantity=quant;
        }        
       })
}
function deleteItem(inventory,iid){
      inventory.forEach((item,index)=>{
        if(item.id==iid){
            inventory.splice(index,1);
        }
      })
}
function getItem(inventory,iid){
       return inventory.find((obj)=>obj.id==iid);
}
function printInventory(inventory){
       inventory.forEach((item,index)=>{
        console.log(item);
       })
}
let obj=[
    {
        id:1,
        name:'Apple',
        quantity:10,
        price:0.5
    },
    {
        id:2,
        name:'Banana',
        quantity:20,
        price:0.2
    }
];
let n={
    id:3,
    name:'Orange',
    quantity:15,
    price:0.7
}
console.log("Initial Inventory: ");
console.log(obj);
console.log("Adding item: ");
addItem(obj,n);
console.log(obj);
console.log("Updating item: ");
updateItem(obj,2,30);
console.log(obj);
console.log("Deleting item: ");
deleteItem(obj,2);
console.log(obj);
