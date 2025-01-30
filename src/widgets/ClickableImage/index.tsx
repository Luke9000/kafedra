interface data {
    text: string;
    subtext: string;
    image: string;
  }
  
  interface Props {
    elements: data[];
  }

const ClickableImage: React.FC<Props> = ({ elements }) => {
    return (
      <div className="itemm-list">
        {elements.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.text} />
          </div>
        ))}
      </div>
    );
  };
  
  export default ClickableImage;
  