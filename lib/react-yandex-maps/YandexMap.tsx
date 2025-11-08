// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// import { YandexMapProps } from "@/types/sections";

// const YandexMap = ({ cities }: YandexMapProps) => {
//     return (
//         <figure className="w-full max-w-5xl overflow-hidden rounded-3xl shadow-md">
//             <YMaps>
//                 <Map
//                     defaultState={{
//                         center: [54.85, 83],
//                         zoom: 9,
//                         controls: ["zoomControl", "fullscreenControl"],
//                     }}
//                     width="100%"
//                     height="400px"
//                     modules={[
//                         "control.ZoomControl",
//                         "control.FullscreenControl",
//                     ]}
//                 >
//                     {cities.map((city, index) => (
//                         <Placemark
//                             key={index}
//                             geometry={city.coordinates}
//                             properties={{
//                                 balloonContent: city.name,
//                             }}
//                             options={{
//                                 preset: "islands#blueIcon",
//                             }}
//                         />
//                     ))}
//                 </Map>
//             </YMaps>
//         </figure>
//     );
// };

// export default YandexMap;
