import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

const Items = [
  {
    URL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16119774/2021/11/17/e9c84e47-a9d8-4d34-8b66-df65e81a19561637132978233IVOCMenOliveGreenSlimFitCargosTrousers1.jpg",
    description: "Pants for daily wear",
    Productname: "Pants",
    color: "green",
    colorRating: 76,
    pattern: "floral",
    patternRating: 36,
    fabric: "cotton",
    fabricRating: 75,
    sleeve: "full",
    sleeveRating: 34,
    collar: "Oxford",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },
  {
    URL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/19893892/2022/9/12/4bedb7d5-df83-4356-ac8f-75d93430450e1662959899098Corduroytrousers1.jpg",
    description: "Women's pants for everyday and office use ",
    Productname: "Women's Pant",
    color: "Brown",
    colorRating: 76,
    pattern: "printed",
    patternRating: 36,
    fabric: "rayon",
    fabricRating: 75,
    sleeve: "sleeveless",
    sleeveRating: 34,
    collar: "collarless",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },

  {
    URL: "https://5.imimg.com/data5/GE/KT/MY-40970666/brown-formal-trouser-500x500.jpg",
    description: "Men's Pants Brown",
    Productname: "Pants",
    color: "Brown",
    colorRating: 76,
    pattern: "self-design",
    patternRating: 36,
    fabric: "Viscose",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "collared",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },
  {
    URL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7719550/2018/12/11/24edbba9-73c3-42c6-8ae8-41b09f871a201544530684914-DENNISON-Men-Trousers-5831544530683640-1.jpg",
    description: "Office/Casual Pants",
    Productname: "Casual Pants",
    color: "Blue",
    colorRating: 76,
    pattern: "solid",
    patternRating: 36,
    fabric: "Polyester",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "collared",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },

  {
    URL: "https://cdn.shopify.com/s/files/1/1662/1831/products/MPTH1006-Adventure-Pant-Hawkeye_2291-FT.jpg?v=1660433652",
    description: "Pants brown ",
    Productname: "Pants Casual",
    color: "Brown",
    colorRating: 76,
    pattern: "print",
    patternRating: 36,
    fabric: "Polyester/Spandex",
    fabricRating: 75,
    sleeve: "half sleeve",
    sleeveRating: 34,
    collar: "round",
    collarRating: 90,
    fit: "medium",
    fitRating: 76,
  },

  {
    URL: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/675320/01/mod01/fnd/IND/fmt/png/Futuristic-Men's-Graphic-Pants",
    description: "Track pants for jogging",
    Productname: "Track Pants",
    color: "Blue",
    colorRating: 76,
    pattern: "solid",
    patternRating: 36,
    fabric: "denim",
    fabricRating: 75,
    sleeve: "half",
    sleeveRating: 34,
    collar: "V neck",
    collarRating: 90,
    fit: "slim",
    fitRating: 76,
  },

  {
    URL: "http://cdn.shopify.com/s/files/1/0329/4461/9657/products/1_27128b6e-5c2e-420e-85b9-d202cbcd8c0b_1200x630.jpg?v=1602314297",
    description: "Formal pants for office usage",
    Productname: "Formal Pants",
    color: "Blue",
    colorRating: 76,
    pattern: "floral",
    patternRating: 36,
    fabric: "rayon",
    fabricRating: 75,
    sleeve: "sleeveless",
    sleeveRating: 34,
    collar: "boat neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },

  {
    URL: "https://5.imimg.com/data5/GK/AD/MY-21748973/mens-designer-shirt-500x500.jpg",
    description: "Gray Pant",
    Productname: "Formal Pant",
    color: "Black",
    colorRating: 76,
    pattern: "embroidered",
    patternRating: 36,
    fabric: "net",
    fabricRating: 75,
    sleeve: "3/4th sleeve",
    sleeveRating: 34,
    collar: "round neck",
    collarRating: 90,
    fit: "lose",
    fitRating: 76,
  },
  {
    URL: "https://cdn.shopaccino.com/qarot/products/v2a4734-622474_m.jpg",
    description: "Men's formal/casual pants",
    Productname: "Pants",
    color: "White",
    colorRating: 76,
    pattern: "Knitted",
    patternRating: 36,
    fabric: "Viscose rayon polyester",
    fabricRating: 75,
    sleeve: "full sleeve",
    sleeveRating: 34,
    collar: "round neck",
    collarRating: 90,
    fit: "tight fit",
    fitRating: 76,
  },

  // {
  //   URL: "https://cdn.shopify.com/s/files/1/0266/6276/4597/products/300901862GREY_2_1024x1024.jpg?v=1660039137",
  //   description: "Women's cotton maxi jumpsuit",
  //   Productname: "Jumpsuit",
  //   color: "Light Blue",
  //   colorRating: 76,
  //   pattern: "Printed",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "Sleeveless",
  //   sleeveRating: 34,
  //   collar: "Square neck",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/81Bn7C9SkWL._UY879_.jpg",
  //   description: "Women's party wear ethnic cotton anarkali kurti ",
  //   Productname: "Kurti",
  //   color: "Dark Blue",
  //   colorRating: 76,
  //   pattern: "Printed",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "Full sleeve",
  //   sleeveRating: 34,
  //   collar: "round neck",
  //   collarRating: 90,
  //   fit: "lose",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/91mESvatugL._UY879_.jpg",
  //   description: "Women's party wear ethnic foiled short kurti ",
  //   Productname: "Kurti",
  //   color: "Teal",
  //   colorRating: 76,
  //   pattern: "Printed",
  //   patternRating: 36,
  //   fabric: "Polyester",
  //   fabricRating: 75,
  //   sleeve: "Full sleeve",
  //   sleeveRating: 34,
  //   collar: "V neck",
  //   collarRating: 90,
  //   fit: "lose",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/912YhyzVNhL._UX679_.jpg",
  //   description: "Women's kanjivaram silk saree",
  //   Productname: "Saree",
  //   color: "Dark blue",
  //   colorRating: 76,
  //   pattern: "Zari Woven",
  //   patternRating: 36,
  //   fabric: "Silk",
  //   fabricRating: 75,
  //   sleeve: "N/A",
  //   sleeveRating: 34,
  //   collar: "N/A",
  //   collarRating: 90,
  //   fit: "lose",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/71cD9M7xwtL._UY879_.jpg",
  //   description: "Metallic lycra shirt for men",
  //   Productname: "Shirt",
  //   color: "peacock blue",
  //   colorRating: 76,
  //   pattern: "Solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "full sleeve",
  //   sleeveRating: 34,
  //   collar: "collared",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/413uiq-cuxL._UX679_.jpg",
  //   description: "Cotton full sleeve casual shirt for men",
  //   Productname: "Shirt",
  //   color: "blush green",
  //   colorRating: 76,
  //   pattern: "Solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "full sleeve",
  //   sleeveRating: 34,
  //   collar: "uncollared",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/71CWoEsQctL._SY879._SX._UX._SY._UY_.jpg",
  //   description: "Cotton full sleeve casual shirt for men",
  //   Productname: "Shirt",
  //   color: "maroon",
  //   colorRating: 76,
  //   pattern: "Solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "full sleeve",
  //   sleeveRating: 34,
  //   collar: "uncollared",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/61Y5LHA-yIL._SX679._SX._UX._SY._UY_.jpg",
  //   description: "Cotton full sleeve casual shirt for men",
  //   Productname: "Shirt",
  //   color: "grey",
  //   colorRating: 76,
  //   pattern: "Solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "full sleeve",
  //   sleeveRating: 34,
  //   collar: "uncollared",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/61i64Zs5EaL._UY879_.jpg",
  //   description: "Cotton half sleeve casual T-shirt for men",
  //   Productname: "T-Shirt",
  //   color: "white",
  //   colorRating: 76,
  //   pattern: "Grahpic",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "half sleeve",
  //   sleeveRating: 34,
  //   collar: "round neck",
  //   collarRating: 90,
  //   fit: "lose",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/61rywc9WL7L._SX679._SX._UX._SY._UY_.jpg",
  //   description: "Half sleeve casual T-shirt for men",
  //   Productname: "T-Shirt",
  //   color: "maroon",
  //   colorRating: 76,
  //   pattern: "Solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "half sleeve",
  //   sleeveRating: 34,
  //   collar: "v neck",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },
  // {
  //   URL: "https://m.media-amazon.com/images/I/61docvEWxvL._SX679._SX._UX._SY._UY_.jpg",
  //   description: "Half sleeve casual T-shirt for men",
  //   Productname: "T-Shirt",
  //   color: "white",
  //   colorRating: 76,
  //   pattern: "Solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "half sleeve",
  //   sleeveRating: 34,
  //   collar: "v neck",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/51pRMd7RuZL._UX679_.jpg",
  //   description: "Men's half sleeve cotton lounge set",
  //   Productname: "Lounge set",
  //   color: "blue",
  //   colorRating: 76,
  //   pattern: "digital print",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "half sleeve",
  //   sleeveRating: 34,
  //   collar: "v neck",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/61DnLIKbPkL._UY879_.jpg",
  //   description: "Men's full sleeve cotton lounge set",
  //   Productname: "Lounge set",
  //   color: "grey",
  //   colorRating: 76,
  //   pattern: "solid",
  //   patternRating: 36,
  //   fabric: "Cotton",
  //   fabricRating: 75,
  //   sleeve: "full sleeve",
  //   sleeveRating: 34,
  //   collar: "v neck",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },

  // {
  //   URL: "https://m.media-amazon.com/images/I/712SX6c64SL._UY879_.jpg",
  //   description: "Gorgette saree",
  //   Productname: "Saree",
  //   color: "black",
  //   colorRating: 76,
  //   pattern: "solid",
  //   patternRating: 36,
  //   fabric: "Gorgette",
  //   fabricRating: 75,
  //   sleeve: "N/A",
  //   sleeveRating: 34,
  //   collar: "N/A",
  //   collarRating: 90,
  //   fit: "regular",
  //   fitRating: 76,
  // },
];
export default function Shirt() {
  // const [append, addTowishlist] = useState('0');
  // const onPressHandler =() => {

  // }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView>
        {Items.map((item, index) => {
          return (
            <View key={index} style={styles.items}>
              <Image style={styles.img} source={{ uri: item.URL }} />
              <Pressable
                //onPress={onPressHandler}
                // style ={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
                style={styles.press}
              >
                <Text style={styles.wishlistText}>Wishlist</Text>
              </Pressable>
              <Text style={styles.text}>{item.Productname}</Text>
              <Text style={styles.text2}>{item.description}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    flex: 1,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
    marginRight: 20,
    marginBottom: 0,
    color: "#E7052E",
    fontSize: 22,
    paddingBottom: 0,
  },
  text2: {
    flex: 1,
    padding: 20,
    color: "#D8D1A9",
    marginTop: 0,
    margin: 5,
    fontSize: 12,
  },
  items: {
    flex: 1,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 0,
    justifyContent: "center",
    backgroundColor: "#D6D6D6",
    width: 325,
    height: 400,
  },
  img: {
    flex: 1,
    justifyContent: "center",
    padding: 100,
    marginLeft: 35,
    marginRight: 10,
    marginTop: 20,
    width: 250,
    height: 100,
  },
  wishlistText: {
    fontSize: 12,
    color: "#F6D7DC",
    fontWeight: "bold",
    marginLeft: 3,
    marginTop: 1,
  },
  press: {
    width: 50,
    height: 20,
    backgroundColor: "#A7001F",
    margin: 15,
    borderRadius: 10,
  },
});