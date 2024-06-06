import axios from "axios";
import { Input } from "../input";
import { useForm} from 'react-hook-form';
import { useNavigate } from "react-router-dom";


type FormValues = {
    email: string
    password: string
  }
  


export default function SignUp(){
  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmitDetails = handleSubmit((data:FormValues) => {
        axios.post('http://localhost:3000/signup',{
            data
        },
        {
            withCredentials:true
        }
        )

        alert('login success')
        
    setTimeout(()=>{
      navigate('/')
    },1000)
      })

    return<>

<section className="h-screen sm:w-[80vw]">
  <div className="h-full">
    
    <div
      className="flex pt-8 flex-wrap items-center justify-center lg:justify-between">
      <div
        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="w-full"
          alt="Sample image" />
      </div>

      
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <form onSubmit={onSubmitDetails}>
          
      

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <Input
            {...register("email")}
              type="text"
              className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput2"
              placeholder="Email address" />
           
          </div>

           <div className="relative mb-6" data-twe-input-wrapper-init>
            <Input
            {...register("password")}
              type="password"
              className="peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput22"
              placeholder="Password" />
       
          </div>

          <div className="mb-6 flex items-center justify-between">
            
            <div className="mb-[0.125rem] block min-h-[1.5rem] ps-[1.5rem]">
              <input
                className="relative float-left -ms-[1.5rem] me-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-secondary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ms-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ms-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent rtl:float-right dark:border-neutral-400 dark:checked:border-primary dark:checked:bg-primary"
                type="checkbox"
                value=""
                id="exampleCheck2" />
              <label
                className="inline-block ps-[0.15rem] hover:cursor-pointer"
                htmlFor="exampleCheck2">
                Remember me
              </label>
            </div>

            
            <a href="#!">Terms and conditions</a>
          </div>

          <div className="text-center lg:text-left">
            <button
              className="inline-block w-full rounded bg-primary px-7 pb-2 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
              data-twe-ripple-init
              data-twe-ripple-color="light">
              Register
            </button>

            <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
              Have an account?
              <a
                href="#!"
                className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                >Login</a>
              
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    
    </>
}


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { useThree, Object3DNode, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "./data/globe.json";
// declare module "@react-three/fiber" {
//   interface ThreeElements {
//     threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
//   }
// }

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const aspect = 1.2;
// const cameraZ = 300;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   initialPosition?: {
//     lat: number;
//     lng: number;
//   };
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
//   data: Position[];
// }

// let numbersOfRings = [0];

// export function Globe({ globeConfig, data }: WorldProps) {
//   const [globeData, setGlobeData] = useState<
//     | {
//         size: number;
//         order: number;
//         color: (t: number) => string;
//         lat: number;
//         lng: number;
//       }[]
//     | null
//   >(null);

//   const globeRef = useRef<ThreeGlobe | null>(null);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#020817",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#1d072e",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (globeRef.current) {
//       _buildData();
//       _buildMaterial();
//     }
//   }, [globeRef.current]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial() as unknown as {
//       color: Color;
//       emissive: Color;
//       emissiveIntensity: number;
//       shininess: number;
//     };
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     const arcs = data;
//     let points = [];
//     for (let i = 0; i < arcs.length; i++) {
//       const arc = arcs[i];
//       const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     // remove duplicates for same lat and lng
//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex((v2) =>
//           ["lat", "lng"].every(
//             (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
//           )
//         ) === i
//     );

//     setGlobeData(filteredPoints);
//   };

//   useEffect(() => {
//     if (globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor((e) => {
//           return defaultProps.polygonColor;
//         });
//       startAnimation();
//     }
//   }, [globeData]);

//   const startAnimation = () => {
//     if (!globeRef.current || !globeData) return;

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
//       .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
//       .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
//       .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
//       .arcColor((e: any) => (e as { color: string }).color)
//       .arcAltitude((e) => {
//         return (e as { arcAlt: number }).arcAlt * 1;
//       })
//       .arcStroke((e) => {
//         return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
//       })
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e) => (e as { order: number }).order * 1)
//       .arcDashGap(15)
//       .arcDashAnimateTime((e) => defaultProps.arcTime);

//     globeRef.current
//       .pointsData(data)
//       .pointColor((e) => (e as { color: string }).color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);

//     globeRef.current
//       .ringsData([])
//       .ringColor((e: any) => (t: any) => e.color(t))
//       .ringMaxRadius(defaultProps.maxRings)
//       .ringPropagationSpeed(RING_PROPAGATION_SPEED)
//       .ringRepeatPeriod(
//         (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
//       );
//   };

//   useEffect(() => {
//     if (!globeRef.current || !globeData) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current || !globeData) return;
//       numbersOfRings = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       globeRef.current.ringsData(
//         globeData.filter((d, i) => numbersOfRings.includes(i))
//       );
//     }, 2000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [globeRef.current, globeData]);

//   return (
//     <>
//       <threeGlobe ref={globeRef} />
//     </>
//   );
// }

// export function WebGLRendererConfig() {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0xffaaff, 0);
//   }, []);

//   return null;
// }

// export function World(props: WorldProps) {
//   const { globeConfig } = props;
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);
//   return (
//     <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe {...props} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotateSpeed={1}
//         autoRotate={true}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// }

// export function hexToRgb(hex: string) {
//   var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//   hex = hex.replace(shorthandRegex, function (m, r, g, b) {
//     return r + r + g + g + b + b;
//   });

//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//   return result
//     ? {
//         r: parseInt(result[1], 16),
//         g: parseInt(result[2], 16),
//         b: parseInt(result[3], 16),
//       }
//     : null;
// }

// export function genRandomNumbers(min: number, max: number, count: number) {
//   const arr = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (arr.indexOf(r) === -1) arr.push(r);
//   }

//   return arr;
// }