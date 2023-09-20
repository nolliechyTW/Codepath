import './App.css';
import header from '../src/image/header.png';
import Card from './components/Card';
const App = () => {

  return (
    <div className="App">
      <img src={header} alt="header"></img>
      <h1> 10 Best Museums & Attractions in Pilly🎉</h1>
      <Card
        img="https://cdn.sanity.io/images/f23a1pgq/pma_production/7efb6a448a5688e5ddaba5e2e475ad35d5e7098e-4260x2851.jpg?rect=0,354,4260,2174&bg=f2f2f2&w=1450&h=740&q=80&fit=clip"
        title="Philadelphia Museum of Art"
        description="The Philadelphia Museum of Art—in partnership with the city, the region, and art museums around the globe—seeks to preserve, enhance, interpret, and extend the reach of its great collections in particular, and the visual arts in general, to an increasing and increasingly diverse audience as a source of delight, illumination, and lifelong learning."
        linkto="https://philamuseum.org/?utm_source=google&utm_medium=search&utm_campaign=PMoA%20_2023_Brand_PhilaCounty&utm_content=rsa&utm_term=pmoa&gclid=CjwKCAjwjaWoBhAmEiwAXz8DBSl0cDj1jbroMYCSUHsq5ON_FKIpyx_MinvjpAGcIistfOhsOrKeIxoC5UUQAvD_BwE"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2022/03/LibertyBell_MFischetti-2200x1237px.jpg"
        title="Liberty Bell Center"
        description="Part of the U.S. National Park Service and Independence National Historical Park, the Liberty Bell’s home on Independence Mall looms as powerful and dramatic as the bell itself. The Liberty Bell shines as one of the world’s most recognizable symbols of freedom, offering continuous inspiration for believers in civil rights."
        linkto="https://www.nps.gov/inde/planyourvisit/libertybellcenter.htm"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2020/07/independence-hall-front-back-daytime-jfusco-for-vp-2200x1237px-1400x787.jpg"
        title="Independence Hall"
        description="Eleven years later, representatives from 12 states gathered once again at the State House to shape the U.S. Constitution, finally creating one unified nation. A national treasure, Independence Hall is one of only 24 World Heritage sites in the nation, placing it in the company of the Statue of Liberty and Yellowstone National Park."
        linkto="https://www.nps.gov/inde/planyourvisit/independencehall.htm"
      />  

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2018/02/Presidents-House-1.jpg"
        title="The President's House"
        description="The President’s House: Freedom and Slavery in the Making of a New Nation explores the paradox of slavery and freedom at the site of the nation’s first executive mansion, in which Presidents George Washington and John Adams lived during their terms and where nine enslaved people served the first president."
        linkto="https://www.nps.gov/inde/learn/historyculture/places-presidentshousesite.htm"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2019/01/independence-mall-hall-aerial-crtsy-we-film-philly-new-2200x1237px-1044x781.jpg"
        title="Independence National Historical Park"
        description="In the heart of Old City and Society Hill — now known as Philadelphia’s Historic District — is where the country was born, as evidenced by the seminal locations that make up Independence National Historical Park. And while the Liberty Bell Center and Independence Hall are no doubt the most iconic things to do in the park, they’re far from the only ones."
        linkto="https://www.visitphilly.com/things-to-do/attractions/independence-national-historical-park/"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2018/06/NationalConstitutionCenter_J_Fusco_048_1200x900-1044x781.jpg"
        title="National Constitution Center"
        description="Dedicated to the four most powerful pages in America’s history, the National Constitution Center examines “We the People.” Museum-goers can explore exhibits and artifacts, view an original copy of the Bill of Rights, walk among 42 life-size bronze statues of delegates who attended the Constitutional Convention in 1787 and learn more about Constitutional amendments."
        linkto="https://constitutioncenter.org/"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2018/05/Museum_of_the_American_Revolution_J_Fusco_1200x900-1044x781.jpg"
        title="Museum of the American Revolution"
        description="The Museum of the American Revolution brings to life the world-changing War of Independence through an unmatched collection of artifacts, including weapons, documents, personal items, works of art and General George Washington’s headquarters tent."
        linkto="https://www.amrevmuseum.org/"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2019/03/betsy-ross-house-photo-by-jeff-fusco-for-hpi-1200x900-1044x781.jpg"
        title="Betsy Ross House"
        description="America’s most famous flag maker greets guests at her 18th-century upholstery shop, part of the tiny dwelling which today is the Betsy Ross House museum where visitors learn about Ross’ life and legend, and enjoy programs, storytelling and activities."
        linkto="https://historicphiladelphia.org/betsy-ross-house/"
      />

      <Card
        img="https://cdn.sanity.io/images/f23a1pgq/pma_production/7efb6a448a5688e5ddaba5e2e475ad35d5e7098e-4260x2851.jpg?rect=0,354,4260,2174&bg=f2f2f2&w=1450&h=740&q=80&fit=clip"
        title="Elfreth’s Alley"
        description="Elfreth’s Alley boasts 300 years of history on its charming cobblestone street lined with quaint still-occupied row houses. While a modern city has sprung up around it, the residential alley preserves three centuries of evolution through its old-fashioned flower boxes, shutters, and other architectural details."
        linkto="https://www.elfrethsalley.org/"
      />

      <Card
        img="https://www.visitphilly.com/wp-content/uploads/2019/01/franklin-square-children-new-jfusco-for-hpi-2200x1237px-1044x781.jpg"
        title="Franklin Square"
        description="Take a mini-tour of Philadelphia as you putt-putt your way through scale models of the city’s iconic sites at Philly Mini Golf, or enjoy a nostalgic ride on the Parx Liberty Carousel, a classic tribute to Philadelphia’s great heritage of carousel-making."
        linkto="https://historicphiladelphia.org/franklin-square/"
      />
      <footer>© 2023 Nollie Chen. All rights reserved.</footer>

    </div>
  )
}

export default App