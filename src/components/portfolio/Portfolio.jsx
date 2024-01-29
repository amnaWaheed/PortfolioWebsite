import React, { useRef } from 'react';
import './portfolio.scss';
import { useScroll, useSpring,motion, useTransform } from 'framer-motion';
import KrispX from '../../assets/krispHome.png';


const items = [
  {id:1,
   title:'KrispX Buyer Application',
   img:KrispX,
   desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam illo nobis ea adipisci libero nostrum minima quos consectetur esse itaque, fuga, ab mollitia incidunt molestias quidem nihil dignissimos distinctio!',
  },
  {id:2,
    title:'KrispX Buyer Application',
    img:'krispHome',
    desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam illo nobis ea adipisci libero nostrum minima quos consectetur esse itaque, fuga, ab mollitia incidunt molestias quidem nihil dignissimos distinctio!',
   },
   {id:3,
    title:'KrispX Buyer Application',
    img:'krispHome',
    desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam illo nobis ea adipisci libero nostrum minima quos consectetur esse itaque, fuga, ab mollitia incidunt molestias quidem nihil dignissimos distinctio!',
   },
   {id:4,
    title:'KrispX Buyer Application',
    img:'krispHome',
    desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam illo nobis ea adipisci libero nostrum minima quos consectetur esse itaque, fuga, ab mollitia incidunt molestias quidem nihil dignissimos distinctio!',
   },
   {id:5,
    title:'KrispX Buyer Application',
    img:'krispHome',
    desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam illo nobis ea adipisci libero nostrum minima quos consectetur esse itaque, fuga, ab mollitia incidunt molestias quidem nihil dignissimos distinctio!',
   },
   {id:6,
    title:'KrispX Buyer Application',
    img:'krispHome',
    desc:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis quisquam illo nobis ea adipisci libero nostrum minima quos consectetur esse itaque, fuga, ab mollitia incidunt molestias quidem nihil dignissimos distinctio!',
   }
];

const Portfolio = () => {

  const ref = useRef();
  const {scrollYProgress} = useScroll(
    {target:ref,
     offset:["end end" , "start start"]
    }
  );
  const scaleX = useSpring(scrollYProgress,{
   stiffness: 100,
   damping: 30
  })


  const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref,});
    const y = useTransform(scrollYProgress,[0,1],[-300,300])
    return(
      <section>
        <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
        </div>
      </section>
    )
  }
  return (
    <div className='portfolio' ref = {ref} >
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style = {{scaleX}} className="progressBar"></motion.div>
      </div>
      {items?.map((elem)=>(
        <Single item={elem} key = {elem.id} />
      ))}
    </div>
  )
}

export default Portfolio