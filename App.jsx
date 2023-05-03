
import { css } from "styled-components";
import React from "react";
import { Switch, HashRouter as Router, Route } from "react-router-dom";
import CatalogTablet from "./components/CatalogTablet";
import CatalogTablet2 from "./components/CatalogTablet2";
import Catalog from "./components/Catalog";
import DetailMobile from "./components/DetailMobile";
import DetailTablet from "./components/DetailTablet";
import Detail from "./components/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/catalog-tablet-2">
          <CatalogTablet
            spanText1="Aparments in Philadelphia"
            spanText2="Hideaway tent with pool and tub"
            gridItem11Props={catalogTabletData.gridItem11Props}
            gridItem12Props={catalogTabletData.gridItem12Props}
            imageContainerProps={catalogTabletData.imageContainerProps}
            priceProps={catalogTabletData.priceProps}
            gridItem13Props={catalogTabletData.gridItem13Props}
          />
        </Route>
        <Route path="/catalogu45tablet">
          <CatalogTablet2
            spanText="Aparments in Philadelphia"
            firstStr1Props={catalogTablet2Data.firstStr1Props}
            firstStr2Props={catalogTablet2Data.firstStr2Props}
          />
        </Route>
        <Route path="/:path(|catalog)">
          <Catalog
            spanText1="Aparments in Philadelphia"
            img="/img/img-15@2x.png"
            spanText2="Unique glamping experience"
            gridItem131Props={catalogData.gridItem131Props}
            gridItem132Props={catalogData.gridItem132Props}
            gridItem133Props={catalogData.gridItem133Props}
            priceProps={catalogData.priceProps}
          />
        </Route>
        <Route path="/detail-mobile">
          <DetailMobile {...detailMobileData} />
        </Route>
        <Route path="/detail-tablet">
          <DetailTablet {...detailTabletData} />
        </Route>
        <Route path="/detail">
          <Detail {...detailData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const imageContainer1Data = {
    src: "/img/img-1@2x.png",
};

const price1Data = {
    children: "35 000 ₽",
};

const gridItem11Data = {
    spanText: "daasdasdasda",
    imageContainerProps: imageContainer1Data,
    priceProps: price1Data,
};

const imageContainer2Data = {
    src: "/img/img-2@2x.png",
};

const price2Data = {
    children: "32 000 ₽",
};

const gridItem12Data = {
    spanText: "House with Kazbegi landscapes",
    className: "grid-item-2",
    imageContainerProps: imageContainer2Data,
    priceProps: price2Data,
};

const imageContainer3Data = {
    src: "/img/img-3@2x.png",
};

const price3Data = {
    children: "25 000 ₽",
    className: "price-2",
};

const imageContainer4Data = {
    src: "/img/img-4@2x.png",
};

const price4Data = {
    children: "36 000 ₽",
};

const gridItem13Data = {
    spanText: "Unique glamping experience",
    className: "grid-item-4",
    imageContainerProps: imageContainer4Data,
    priceProps: price4Data,
};

const catalogTabletData = {
    spanText1: "Aparments in Philadelphia",
    spanText2: "Hideaway tent with pool and tub",
    gridItem11Props: gridItem11Data,
    gridItem12Props: gridItem12Data,
    imageContainerProps: imageContainer3Data,
    priceProps: price3Data,
    gridItem13Props: gridItem13Data,
};

const price5Data = {
    children: "35 000 ₽",
    className: "price-4",
};

const gridItem122Data = {
    img: "/img/img-6@2x.png",
    spanText1: "daasdasdasda",
    className: "",
    priceProps: price5Data,
};

const price6Data = {
    children: "32 000 ₽",
    className: "price-5",
};

const gridItem123Data = {
    img: "/img/img-7@2x.png",
    spanText1: "House with Kazbegi landscapes",
    className: "grid-item-2-1",
    priceProps: price6Data,
};

const firstStr1Data = {
    gridItem121Props: gridItem122Data,
    gridItem122Props: gridItem123Data,
};

const price7Data = {
    children: "25 000 ₽",
    className: "price-6",
};

const gridItem124Data = {
    img: "/img/img-8@2x.png",
    spanText1: "Hideaway tent with pool and tub",
    className: "grid-item-3-1",
    priceProps: price7Data,
};

const price8Data = {
    children: "36 000 ₽",
    className: "price-7",
};

const gridItem125Data = {
    img: "/img/img-9@2x.png",
    spanText1: "Unique glamping experience",
    className: "grid-item-4-1",
    priceProps: price8Data,
};

const firstStr2Data = {
    gridItem121Props: gridItem124Data,
    gridItem122Props: gridItem125Data,
};

const catalogTablet2Data = {
    firstStr1Props: firstStr1Data,
    firstStr2Props: firstStr2Data,
};

const price9Data = {
    children: "35 000 ₽",
    className: "price-8",
};

const gridItem132Data = {
    img: "/img/img-11@2x.png",
    spanText: "daasdasdasda",
    priceProps: price9Data,
};

const price10Data = {
    children: "32 000 ₽",
    className: "price-9",
};

const gridItem133Data = {
    img: "/img/img-12@2x.png",
    spanText: "House with Kazbegi landscapes",
    className: "grid-item-2-2",
    priceProps: price10Data,
};

const price11Data = {
    children: "25 000 ₽",
    className: "price-10",
};

const gridItem134Data = {
    img: "/img/img-13@2x.png",
    spanText: "Hideaway tent with pool and tub",
    className: "grid-item-3-2",
    priceProps: price11Data,
};

const price12Data = {
    children: "36 000 ₽",
    className: "price-11",
};

const catalogData = {
    spanText1: "Aparments in Philadelphia",
    img: "/img/img-15@2x.png",
    spanText2: "Unique glamping experience",
    gridItem131Props: gridItem132Data,
    gridItem132Props: gridItem133Data,
    gridItem133Props: gridItem134Data,
    priceProps: price12Data,
};

const header4Data = {
    className: "header-1",
};

const detailMobileData = {
    spanText1: "Shepherd's Hut with hot tub",
    spanText2: "",
    spanText3: <React.Fragment>Charming and<br />comfortable house</React.Fragment>,
    img01: "/img/img-01-1@2x.png",
    img02: "/img/img-02-1@2x.png",
    img03: "/img/img-03-1@2x.png",
    spanText4: "35 000 ₽",
    spanText5: <React.Fragment>Along with conventional advertising and below the line activities, organizations and corporate bodies have come to realize that they need to invest in trade shows in order to create maximum recall for their product or brand name. There are several benefits to participating in a trade show. The resort Bakhmaro is located at 2050 meters high.<br /><br />The average temperature in August is 13,4 ° C). Bakhmaro Hawa&#x27;s children of all ages are good. Here are the small ones who have chronic bronchitis, dry pleuritis, lymphadenitis, mild or moderate bronchial asthma or anemia.</React.Fragment>,
    line: "/img/line-1@2x.png",
    headerProps: header4Data,
};

const header22Data = {
    className: "header-3",
};

const detailTabletData = {
    spanText1: "Shepherd's Hut with hot tub",
    spanText2: "",
    spanText3: "Charming and comfortable house",
    img01: "/img/img-01-2@2x.png",
    img02: "/img/img-02-2@2x.png",
    img03: "/img/img-03-2@2x.png",
    spanText4: "35 000 ₽",
    spanText5: <React.Fragment>Along with conventional advertising and below the line activities, organizations and corporate bodies have come to realize that they need to invest in trade shows in order to create maximum recall for their product or brand name. There are several benefits to participating in a trade show. The resort Bakhmaro is located at 2050 meters high.<br /><br />The average temperature in August is 13,4 ° C). Bakhmaro Hawa&#x27;s children of all ages are good. Here are the small ones who have chronic bronchitis, dry pleuritis, lymphadenitis, mild or moderate bronchial asthma or anemia.</React.Fragment>,
    line: "/img/line-2@2x.png",
    header2Props: header22Data,
};

const header32Data = {
    className: "header-5",
};

const detailData = {
    spanText1: "Shepherd's Hut with hot tub",
    spanText2: "",
    spanText3: "Charming and comfortable house",
    img01: "/img/img-01-3@2x.png",
    img02: "/img/img-02-3@2x.png",
    img03: "/img/img-03-3@2x.png",
    spanText4: "35 000 ₽",
    spanText5: <React.Fragment>Along with conventional advertising and below the line activities, organizations and corporate bodies have come to realize that they need to invest in trade shows in order to create maximum recall for their product or brand name. There are several benefits to participating in a trade show. The resort Bakhmaro is located at 2050 meters high.<br /><br />The average temperature in August is 13,4 ° C). Bakhmaro Hawa&#x27;s children of all ages are good. Here are the small ones who have chronic bronchitis, dry pleuritis, lymphadenitis, mild or moderate bronchial asthma or anemia.</React.Fragment>,
    line: "/img/line-3@2x.png",
    header3Props: header32Data,
};

