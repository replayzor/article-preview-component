import { useState } from "react";
import { FaShare } from "react-icons/fa";

import FaceBook from "/images/icon-facebook.svg";
import Twitter from "/images/icon-twitter.svg";
import Pinterest from "/images/icon-pinterest.svg";

function App() {
	const [isOverlayVisible, setIsOverlayVisible] = useState(false);

	const handleOpenOverlay = () => {
		setIsOverlayVisible(true);
	};

	const handleCloseOverlay = () => {
		setIsOverlayVisible(false);
		console.log("closed");
	};

	return (
		<main className="flex items-center justify-center h-screen bg-lightGrayishBlue">
			<article className="relative flex flex-col md:flex-row md:w-[670px] w-[350px] rounded-xl bg-white overflow-hidden">
				<div className="">
					<img
						src="/images/drawers.jpg"
						alt=""
						className="object-cover w-full h-full md:rounded-tr-none rounded-t-xl"
					/>
				</div>
				<div className="md:w-[450px]">
					<section className="md:pt-5 md:flex md:items-start md:w-[430px] py-10 md:flex-col px-8 w-[350px] flex justify-center items-center flex-col bg-white">
						<h1 className="pb-4 md:w-[82%] text-veryDarkGrayishBlue font-bold font-Manrope  tracking-wide">
							Shift the overall look and feel by adding these wonderful touches
							to furniture in your home
						</h1>
						<p className="text-desaturatedDarkBlue text-[13px] md:text-xs font-Manrope tracking-wider">
							Ever been in a room and felt like something was missing? Perhaps
							it felt slightly bare and uninviting. I’ve got some simple tips to
							help you make any room feel complete.
						</p>
					</section>
					<footer className="pb-6 relative">
						<div className="flex items-center gap-3">
							<img
								src="/images/avatar-michelle.jpg"
								alt=""
								className="rounded-full h-11 ml-7"
							/>
							<div>
								<h1 className="text-[14px] text-veryDarkGrayishBlue font-bold">
									Michelle Appleton
								</h1>
								<p className="text-grayishBlue text-[15px] font-light">
									28 Jun 2020
								</p>
							</div>
							<button
								onClick={handleOpenOverlay}
								type="button"
								className="flex items-center justify-center w-8 h-8 ml-16 rounded-full md:ml-36 bg-lightGrayishBlue"
							>
								<FaShare className="text-desaturatedDarkBlue" />
							</button>
						</div>
						{isOverlayVisible && (
							<div className="absolute md:rounded-md left-0 md:left-[13rem] right-0 bottom-0 md:bottom-[6rem] md:w-[50%] md:h-1/2 bg-black bg-opacity-50">
								<div className="md:p-5 md:rounded-t-md flex items-center justify-center bg-veryDarkGrayishBlue h-full p-4 rounded-md transition-all duration-300 w-full">
									{/* Overlay content goes here */}
									<p className="uppercase text-sm tracking-[0.3rem] text-grayishBlue">
										Share
									</p>
									<div className="flex gap-3 text-2xl ml-4">
										<img src={FaceBook} alt="" />
										<img src={Twitter} alt="" />
										<img src={Pinterest} alt="" />
									</div>
									<button
										type="button"
										className="flex md:hidden items-center justify-center w-8 h-8 ml-16 rounded-full md:ml-36 bg-desaturatedDarkBlue"
									>
										<FaShare className="text-white" />
									</button>
								</div>
							</div>
						)}
					</footer>
				</div>
			</article>
		</main>
	);
}

export default App;
