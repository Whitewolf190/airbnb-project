import Comp1 from "./components/Comp1";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let response = [
    {
      name: "Hikkaduwa,Sri lanka",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-34549071/original/bc36ef3f-bd09-4d1e-b9e7-03e5e845080f.jpeg?im_w=720",
      kms: "773 kms away",
      date: "1-7 Apr",
      price: '30,882',
    },

    {
      name: "Meeru Island",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=720",
      kms: "1,200 kms away",
      date: "1-7 Apr",
      price: "",
    },
    {
      name: "Feeali Maldives",
      img: "https://a0.muscache.com/im/pictures/hosting/Hosting-1068985442198185255/original/c90103d4-4a87-474d-a747-dd1e2e87fbcc.jpeg?im_w=720",
      kms: "1,355 kms away",
      date: "1-6 Apr",
      price: "57,208",
    },
    {
      name: "Vypin,India",
      img: "https://a0.muscache.com/im/pictures/24f50efb-2af9-4d53-a6b1-e69f54d1f5ba.jpg?im_w=720",
      kms: "553 kms away",
      date: "1-6 Apr",
      price: "30,208",
    },
    {
      name: "Goidhoo,Maldives",
      img: "https://a0.muscache.com/im/pictures/ebf853c5-7c39-472e-a09f-354c99be2fce.jpg?im_w=720",
      kms: "1,213 kms away",
      date: "1-6 Apr",
      price: "8153",
    },
    {
      name: "Kaafu Atoli,Maldives",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-831527464018917266/original/9ae20254-6983-4c3a-b6c5-835eeccc7b88.jpeg?im_w=720",
      kms: "1,271 kms away",
      date: "1-6 Apr",
      price: "1,90,533",
    },
    {
      name: "Tangalle,Sri Lanka",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-53160845/original/1bcde1f4-14ef-448a-82a1-17dd01db6110.jpeg?im_w=720",
      kms: "786 kms away",
      date: "1-6 Apr",
      price: "14,234",
    },
    {
      name: "Tambon Si Sunthon,Thailand",
      img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-49493094/original/9cbe3444-ef35-4abe-8448-ce7ef167ff40.jpeg?im_w=720",
      kms: "2,045 kms away",
      date: "1-6 Apr",
      price: "5,23,947",
    },
    {
      name: "Male,Maldives",
      img: "https://a0.muscache.com/im/pictures/miso/Hosting-1000055216829126880/original/ea355c0b-a7a1-4035-9783-2ff1cbaa7550.jpeg?im_w=720",
      kms: "1,268 kms away",
      date: "1-6 Apr",
      price: "33,361",
    },
    {
      name: "Male,Sri Lanka",
      img: "https://a0.muscache.com/im/pictures/a2ec1244-80dc-47a5-b412-7069b614fb70.jpg?im_w=720",
      kms: "1,273 kms away",
      date: "1-6 Apr",
      price: "22,234",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="parent-cont">
        {response.map((item, index) => (
          <Comp1
            key={index}
            name={item.name}
            img={item.img}
            kms={item.kms}
            date={item.date}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default App;
