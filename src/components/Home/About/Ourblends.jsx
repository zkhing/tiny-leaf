import img1 from '../../../images/Blend.png'

function Ourblends() {
  return (
    <div className='blends-container'>
      <h3>Our Blends</h3>
      <p className='blend-txt'>
        We make our very own Tiny Leaf blends right here in the tea house,
        offering new flavours according to the season. We source all our produce
        sustainably and make sure the hands that laboured for our flavoursome
        cups were rewarded fairly.
      </p>
      <img src={img1} alt="" />
      <h4 className='hand-picked-txt'>Hand-picked and sustainable</h4>
    </div>
  );
}

export default Ourblends;