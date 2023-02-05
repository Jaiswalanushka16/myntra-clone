import "./App.css";
import Nav from "./Components/Navbar/Navbar";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import Filters from "./Components/Filters/Filters";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import React from "react";
import { data } from "./Assets/shirts_data";

function App() {
  // let data = [
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19818628/2022/9/6/ec27eee6-d613-4423-8e0f-007aea1603c31662468109188Shirts1.jpg",
  //     name: "HERE&NOW",
  //     desc: "Slim fit Casual shirt",
  //     price: 749,
  //     mrp: 1499,
  //     categories: ["half-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/14615110/2021/9/10/c4351ed5-9b83-41da-b81e-05faae0a13051631265003631-Roadster-Women-Shirts-6201631265003003-1.jpg",
  //     name: "Roadster",
  //     desc: "Pure Cotton Solid Casual Shirt",
  //     price: 764,
  //     mrp: 1699,
  //     categories: ["full-shirt"],
  //     gender: "women",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg",
  //     name: "Dennis Lingo",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 610,
  //     mrp: 1849,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7488103/2019/8/22/acfba45f-8f9c-4b97-b5bc-a909418bdf4c1566454100620-Dennis-Lingo-Men-Green-Slim-Fit-Solid-Casual-Shirt-358156645-3.jpg",
  //     name: "Dennis Lingo",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 610,
  //     mrp: 1849,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/11361288/2020/2/4/d67d40eb-4814-42d2-8325-bda8017b5ee41580821208963-WROGN-Men-Shirts-4521580821207000-1.jpg",
  //     name: "WROGN",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 989,
  //     mrp: 2199,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/6714923/2019/3/6/343e1235-336c-401e-beab-afbb828448231551863812172-Dennis-Lingo-Men-Black-Slim-Fit-Solid-Casual-Shirt-473155186-1.jpg",
  //     name: "Dennis Lingo",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 610,
  //     mrp: 1849,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2050688/2018/2/5/11517823120338-HIGHLANDER-Men-White-Slim-Fit-Solid-Casual-Shirt-5911517823120124-1.jpg",
  //     name: "HIGHLANDER",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 549,
  //     mrp: 1099,
  //     categories: ["full-shirt", "prince-collar-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16532688/2021/12/16/b9944013-0b1b-4d7d-8278-4fafd118da351639640786257Shirts1.jpg",
  //     name: "HIGHLANDER",
  //     desc: "Slim fit Casual shirt",
  //     price: 531,
  //     mrp: 1399,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20145604/2022/9/23/1c90ebbd-abb9-4599-99c0-73b1f5ccad801663935991365Shirts1.jpg",
  //     name: "HIGHLANDER",
  //     desc: "Slim fit Casual shirt",
  //     price: 351,
  //     mrp: 1849,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10685396/2019/10/29/dbc7e911-5335-4881-922b-a9a4270465fa1572339114566-WROGN-Men-White-Slim-Fit-Solid-Casual-Shirt-301572339112865-1.jpg",
  //     name: "WROGN",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 1099,
  //     mrp: 2199,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1291760/2017/12/5/11512469309123-Highlander-Dark-Green-Slim-Fit-Casual-Shirt-5071512469308877-1.jpg",
  //     name: "HIGHLANDER",
  //     desc: "Slim fit Casual shirt",
  //     price: 549,
  //     mrp: 999,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/21137108/2022/12/9/ff0b8bc0-1194-4eb1-b681-6ff6d183e4081670584215775MenMaroonAthleticFitCasualShirts1.jpg",
  //     name: "PETER ENGLAND",
  //     desc: "Slim fit Casual shirt",
  //     price: 1299,
  //     mrp: 1999,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16532696/2021/12/16/858351ae-13d7-41c9-98f9-13486c0696d81639640760730HIGHLANDERMenWhiteSlimFitCasualShirt1.jpg",
  //     name: "HIGHLANDER",
  //     desc: "Men White Slimfit Casual shirt",
  //     price: 531,
  //     mrp: 1399,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19024438/2022/11/28/0e43918f-40a5-4674-869b-8403f5e00a861669618336755-Blackberrys-Men-Shirts-8981669618336289-1.jpg",
  //     name: "Blackberrys",
  //     desc: "Cotton Slim Fit Casual Shirt",
  //     price: 1077,
  //     mrp: 1795,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12275262/2020/9/11/7d660609-4020-476f-8956-ccf2ce2bbc281599827077562-WROGN-Men-Shirts-8491599827075374-1.jpg",
  //     name: "WROGN",
  //     desc: "Men Slim Fit Casual Shirt",
  //     price: 1099,
  //     mrp: 2199,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/20344070/2023/1/16/24d34ec2-0284-4124-9b85-3c811110bafb1673850386425-Park-Avenue-Men-Pure-Cotton-Slim-Fit-Casual-Shirt-1301673850-1.jpg",
  //     name: "Park Avenue",
  //     desc: "Men Casual Shirt",
  //     price: 1154,
  //     mrp: 2099,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19694418/2022/9/26/4cb24ca9-9749-4e84-8925-e00a41852fcc1664187612034HIGHLANDERMenWhiteSlimFitCasualShirt1.jpg",
  //     name: "HIGHLANDER",
  //     desc: "Slim fit Casual shirt",
  //     price: 499,
  //     mrp: 999,
  //     categories: ["full-shirt"],
  //     gender: "men",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17576086/2022/3/18/e24783e5-e51e-4daa-843e-eb1cd354b2521647583025173Linen-blendshirt1.jpg",
  //     name: "H&M",
  //     desc: "Linen Blend Shirt",
  //     price: 1499,
  //     categories: ["full-shirt"],
  //     gender: "women",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19761198/2022/9/2/e05a447d-e6c7-4a5a-91ce-7b7972646f491662107951495StyleQuotientWomenWhiteClassicFormalShirt1.jpg",
  //     name: "Style Quotient",
  //     desc: "Woman Casual Shirt",
  //     price: 644,
  //     mrp: 1499,
  //     categories: ["full-shirt"],
  //     gender: "women",
  //   },
  //   {
  //     src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/8816777/2019/6/14/fddcc388-186b-4277-a33e-2d2e380701541560497607018-Roadster-Women-Pink-Solid-Shirt-2191560497605861-1.jpg",
  //     name: "Roadster",
  //     desc: "Woman High Low Shirt",
  //     price: 644,
  //     mrp: 1499,
  //     categories: ["full-shirt"],
  //     gender: "women",
  //   },
  // ];

  const [products, setProducts] = React.useState(data);
  const [sorted, setSorted] = React.useState(false);

  React.useEffect(() => {
    // console.log(products);
  }, [products]);
  function filter(props) {
    if (props.type === "gender") {
      let newProducts = data;
      props.gender &&
        (newProducts = data.filter((ele) => ele.gender === props.gender));
      setProducts(newProducts);
    }

    if (props.type === "category") {
      let newProducts = data;
      if (props.categories.length > 0) {
        newProducts = data.filter((ele) => {
          return ele.categories.some((category) =>
            props.categories.includes(category)
          );
        });
      }
      setProducts(newProducts);
    }

    if (props.type === "brand") {
      let newProducts = data;
      if (props.brands.length > 0) {
        newProducts = data.filter((ele) => {
          return props.brands.some(
            (brand) => ele.brand.toLowerCase() === brand.toLowerCase()
          );
        });
      }
      setProducts(newProducts);
    }

    if (props.type === "search") {
      let newProducts = products;
      newProducts = data.filter((ele) => {
        return (
          ele.name.toLowerCase().includes(props.searchParams.toLowerCase()) ||
          ele.desc.toLowerCase().includes(props.searchParams.toLowerCase())
        );
      });
      setProducts(newProducts);
    }
  }

  function sort(props) {
    let newProducts = data.sort((a, b) => {
      if (props === 0) return a.price - b.price;
      else if (props === 1) return b.price - a.price;
      else return 0;
    });
    setSorted(true);
    setProducts(newProducts);
  }
  return (
    <div>
      <Nav filter={filter} />
      <Breadcrumbs />
      <Header sort={sort} />
      <div className="app">
        <Filters filter={filter} />
        {/* <div className="divider-vertical"></div> */}
        <Main data={products} />
      </div>
    </div>
  );
}

export default App;
