import React from "react"
import RoadmapCard from "../components/roadmap/RoadmapCard"
import RoadmapNav from "../components/roadmap/RoadmapNav"

const Roadmap = () => {
  return (
    <div className="w-full h-screen bg-base-200">
      <RoadmapNav />
      <div className="my-4 px-6 md:px-0 md:w-[689px] xl:w-[1110px] md:mx-auto md:grid md:grid-cols-3 md:gap-4">
        <RoadmapCard />
      </div>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan
        magna eu malesuada semper. Duis ac nulla quam. Morbi rutrum, diam in
        semper commodo, urna dolor fringilla magna, eget laoreet leo risus vitae
        tellus. In dictum sem elit, et vestibulum odio fringilla quis. In hac
        habitasse platea dictumst. Curabitur varius odio at arcu semper, quis
        pharetra leo dictum. Maecenas quis ipsum pulvinar, laoreet felis vitae,
        placerat metus. Praesent ac porttitor nibh. Vivamus tempus ultrices
        massa, sagittis porttitor turpis tincidunt in. Nullam iaculis varius
        enim eu auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Maecenas et molestie justo, ut sagittis eros. Nullam ac cursus nisl.
        Phasellus scelerisque est vitae justo hendrerit bibendum. Nullam vel
        elementum nisi. Donec pulvinar dapibus nulla. Pellentesque vehicula
        dapibus ligula. Aenean porttitor commodo augue vitae feugiat. Aenean
        pulvinar vestibulum ligula, sit amet tempus nisi ornare eget. Sed eu
        ligula at tortor viverra varius at id orci. Etiam venenatis et quam id
        aliquam. Nulla facilisi. Maecenas interdum erat pellentesque quam
        tincidunt ultrices. Duis sit amet pharetra lacus. Vivamus ac ultricies
        lacus, a varius lectus. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Quisque efficitur turpis
        ut velit vestibulum consectetur. Vestibulum quis varius mi. Praesent
        ullamcorper libero a neque rhoncus, tristique fermentum magna gravida.
        Etiam mattis nunc quis ipsum sollicitudin, id auctor felis rhoncus. Nunc
        elit risus, porta id ligula eu, aliquam sodales ligula. Nam ligula est,
        tincidunt at lobortis eget, interdum in magna. Praesent id metus lacus.
        Duis egestas tellus vitae iaculis pulvinar. Class aptent taciti sociosqu
        ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent
        commodo nulla velit, non aliquet nisl lobortis a. Aenean sagittis est
        non urna fermentum, et vehicula nulla interdum. Aliquam sed mauris
        tristique, cursus ipsum quis, ultrices risus. Curabitur lacinia velit
        lectus, eget scelerisque felis mollis a. Vivamus nec imperdiet eros.
        Proin non efficitur ipsum. Nullam auctor ipsum ut ipsum dictum, nec
        laoreet velit consectetur. Suspendisse ornare hendrerit massa, ac
        viverra massa egestas vitae. Praesent lobortis mattis ex, nec rhoncus
        neque commodo vitae. Donec molestie metus vel purus euismod
        pellentesque. Suspendisse ex ipsum, fermentum sed vehicula non, pharetra
        vitae justo. Nulla ac vulputate nibh. Sed vulputate convallis erat sit
        amet accumsan. Mauris quis felis ut velit fringilla iaculis ac quis
        felis. Vestibulum vehicula, felis porttitor dictum molestie, arcu sapien
        volutpat augue, a dictum neque elit quis nibh. Mauris id orci nec mauris
        ullamcorper consequat. Nullam vitae aliquam nibh. Maecenas in tortor
        purus.
      </div>
    </div>
  )
}

export default Roadmap
