import { useEffect, useState } from "react";

const Gallery = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className="text-2xl divider italic text-center my-6">Photographs</h2>
                <label className="input input-bordered flex items-center gap-2 w-96 ml-20">
                    <input type="text" className="grow" placeholder="ex. Wedding, Engagement, Birthday,Boishakh" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8 md:gap-6 lg:m-12 md:m-8 m-2">
                {
                    images.map(image =>
                        <div key={image._id} className="">
                            <img src={image.url} className="lg:w-[400px] lg:h-[350px] md:w-[400px] md:h-[300px] w-[360px] h-[280px]" alt="not found" />
                        </div>)
                }
                </div>
            </div>
        </div>
    );
};

export default Gallery;


// [
//     { "_id": "1", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431324/62319811_1706601076150510_2836100616470659072_n.jpg_knsudu.jpg", "eventType": "wedding" },
//     { "_id": "2", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431408/241259035_2529867860490490_884226963242243288_n.jpg_lhqoma.jpg", "eventType": "wedding" },
//     { "_id": "3", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431489/54522948_1632554283555190_3404690446067171328_n.jpg_lgldvb.jpg", "eventType": "wedding" },
//     { "_id": "4", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727431629/458799046_1052616950207091_2755413985206679967_n.jpg_em7h6b.jpg", "eventType": "wedding" },
//     { "_id": "5", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727603768/58383972_1666265593517392_639675768888098816_n.jpg_kgaubx.jpg", "eventType": "wedding" },
//     { "_id": "6", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727711858/38411853_1437669896376964_5046491692677464064_n.jpg_e7ot98.jpg", "eventType": "wedding" },
//     { "_id": "7", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727711981/459221858_1054217690047017_3178643818210920349_n.jpg_ixfpat.jpg", "eventType": "wedding" },
//     { "_id": "8", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727712048/461172192_1063518869116899_6878434269874823754_n.jpg_wlcdou.jpg", "eventType": "wedding" },
//     { "_id": "9", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727712235/459234831_1052615390207247_7810807365716387719_n.jpg_uoikio.jpg", "eventType": "wedding" },
//     { "_id": "10", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727712296/32887320_1358677584276196_5346296520360591360_n.jpg_zsufsz.jpg", "eventType": "wedding" },
//     { "_id": "11", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727712449/54257663_1632554253555193_8380450426880786432_n.jpg_ebdcdo.jpg", "eventType": "wedding" },
//     { "_id": "12", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727712498/446916059_977993371002783_57309980589533564_n.jpg_funpv8.jpg", "eventType": "wedding" },

//     { "_id": "13", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713850/47105669_1541150712695548_404661416218329088_n.jpg_o1r8vw.jpg", "eventType": "birthday" },
//     { "_id": "14", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713882/47391676_1541150716028881_8264595565266862080_n.jpg_p3gsjj.jpg", "eventType": "birthday" },
//     { "_id": "15", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713887/47353112_1541150889362197_6180953990486818816_n.jpg_mgi8sp.jpg", "eventType": "birthday" },
//     { "_id": "16", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713909/47580573_1541150946028858_6351094159230631936_n.jpg_hgzedg.jpg", "eventType": "birthday" },
//     { "_id": "17", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713936/47379616_1541151032695516_8886078054552567808_n.jpg_anble9.jpg", "eventType": "birthday" },
//     { "_id": "18", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713948/47181744_1541150766028876_8555644367677685760_n.jpg_m0f2h6.jpg", "eventType": "birthday" },
//     { "_id": "19", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727713969/47191578_1541150986028854_1171019745172914176_n.jpg_sjtzbk.jpg", "eventType": "birthday" },
//     { "_id": "20", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714038/461528812_1069003675235085_8042212219875044127_n.jpg_txnmqe.jpg", "eventType": "birthday" },
//     { "_id": "21", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714157/47238389_1541151112695508_7207165520250929152_n.jpg_cl0dln.jpg", "eventType": "birthday" },
//     { "_id": "22", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714205/47171247_1541151232695496_5128631954370985984_n.jpg_gxwtck.jpg", "eventType": "birthday" },
//     { "_id": "23", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714448/461348277_1069008045234648_984296754708550463_n.jpg_mzs94w.jpg", "eventType": "birthday" },

//     { "_id": "24", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714911/425744476_891420519660069_6419823856379189509_n.jpg_nd9ke0.jpg", "eventType": "engagement" },
//     { "_id": "25", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714861/425860998_891424072993047_1608161126832960325_n.jpg_tbasb9.jpg", "eventType": "engagement" },
//     { "_id": "26", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714855/425702061_891423556326432_4314894354398895323_n.jpg_uv2qyx.jpg", "eventType": "engagement" },
//     { "_id": "27", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714798/447970746_985376920264428_7725526324512395013_n.jpg_ygcozf.jpg", "eventType": "engagement" },
//     { "_id": "28", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714762/448049678_983901177078669_1048355068860711779_n.jpg_iflrpv.jpg", "eventType": "engagement" },
//     { "_id": "29", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714738/448065478_983974547071332_7908500779290668927_n.jpg_fjurt4.jpg", "eventType": "engagement" },
//     { "_id": "30", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714671/456478255_1037632241705562_3156026165052351768_n.jpg_r4q40q.jpg", "eventType": "engagement" },
//     { "_id": "31", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714644/456397923_1037699378365515_5919122317419703681_n.jpg_nhttgh.jpg", "eventType": "engagement" },
//     { "_id": "32", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714616/456450886_1037699581698828_2065727711484975294_n.jpg_gcdgp8.jpg", "eventType": "engagement" },
//     { "_id": "33", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727714561/46777038_1538052706338682_8845790574121320448_n.jpg_bgk23y.jpg", "eventType": "engagement" },

//     { "_id": "34", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715143/458917966_1053253413476778_5218380153892344707_n.jpg_y5krdp.jpg", "eventType": "boishakh" },
//     { "_id": "35", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715150/459189894_1053243500144436_3657848393538039107_n.jpg_cz8h0z.jpg", "eventType": "boishakh" },
//     { "_id": "36", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715213/459235907_1053253530143433_5823483010250925748_n.jpg_bsoeu3.jpg", "eventType": "boishakh" },
//     { "_id": "37", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715224/31265665_1342318545912100_1375329140420378624_n.jpg_n5tic0.jpg", "eventType": "boishakh" },
//     { "_id": "38", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715233/31265329_1342318499245438_6452586478408040448_n.jpg_l6vk0p.jpg", "eventType": "boishakh" },
//     { "_id": "39", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715242/31357877_1342318265912128_2650089259372904448_n.jpg_wdptjt.jpg", "eventType": "boishakh" },
//     { "_id": "40", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715250/31206293_1342318725912082_7972711494796181504_n.jpg_ge3oqo.jpg", "eventType": "boishakh" },
//     { "_id": "41", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715516/31384989_1342317939245494_3761667206924992512_n.jpg_loeorn.jpg", "eventType": "boishakh" },
//     { "_id": "42", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715551/31300670_1342317509245537_3609122050314076160_n.jpg_ikwphp.jpg", "eventType": "boishakh" },
//     { "_id": "43", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715644/31239479_1342317412578880_7330545220402020352_n.jpg_wxy1h8.jpg", "eventType": "boishakh" },
//     { "_id": "44", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715673/31287391_1342324069244881_8601820630523838464_n.jpg_jec2el.jpg", "eventType": "boishakh" },
//     { "_id": "45", "url": "https://res.cloudinary.com/dvaclg6kh/image/upload/v1727715700/31253041_1342318079245480_1061376621744750592_n.jpg_g9boq9.jpg", "eventType": "boishakh" }
// ]
