import "./slider.css";

interface data {
  text: string;
  subtext: string;
  image: string;
}

interface Props {
  elements: data[];
}

const Slider:React.FC<Props> = ({ elements }) => {
 

  return (
    <div className="wrapper">
      {elements.map((item) => 
      <div key={item.text} className="container"> 
        {<img src={item.image} alt={item.text}></img>}
      </div>
      )}
  
    </div>
  );
};

export default Slider;



{/* <div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div>

<div className="container">
<img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" />
</div> */}