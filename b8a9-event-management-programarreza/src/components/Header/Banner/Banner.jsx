import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Banner = () => {
	return (
		<div className="bg-gray-300 mb-8 md:mb-24 ">
			<Swiper 
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Autoplay, Pagination, ]}
				className="mySwiper w-full md:h-[90vh]"
				>
				<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full' src="https://i.ibb.co/g4npSdg/conferens-banner-1.jpg" alt="" /></SwiperSlide>
				<SwiperSlide><img className='h-[300px] md:h-[90vh] w-full ' src="https://i.ibb.co/nzgzTpK/49092243931-7aa715dc6c-o-scaled-e1625769089219.jpg" alt="" /></SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Banner;