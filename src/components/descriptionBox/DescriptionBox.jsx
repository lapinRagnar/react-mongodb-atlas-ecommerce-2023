import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          Description
        </div>
        <div className="descriptionbox-nav-box fade">
          Reviews (25)
        </div>
      </div>
        <div className="descriptionbox-description">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem impedit explicabo minima, ad aliquam suscipit cumque pariatur cum in est, mollitia iste enim consequatur expedita blanditiis culpa? Voluptate, perferendis incidunt?</p>
          <p>Lorem ipsu. Explicabo eligendi tenetur praesentium excepturi debitis cumque necessitatibus, repellendus iusto eveniet maiores veniam sed nemo. Pariatur cupiditate quod nihil facilis dignissimos eius.</p>
        </div>
    </div>
  )
}

export default DescriptionBox