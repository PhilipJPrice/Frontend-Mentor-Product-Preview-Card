import React from 'react'
import './index.css'
import cart from './assets/images/icon-cart.svg';
import productMobile from './assets/images/image-product-mobile.jpg';
import productDesktop from './assets/images/image-product-desktop.jpg';

export function App() {
	return (
		<div class="flex justify-center items-center min-h-screen">
			<div class="mx-auto w-84 pb-8 bg-white rounded-xl my-5 md:flex md:rounded-lg md:h-112 md:w-172">
				<img src={productMobile} alt="Picture of perfume: Gabrielle by Chanel" class="block rounded-t-xl md:hidden mb-6" />	
				<img src={productDesktop} alt="Picture of perfume: Gabrielle by Chanel" class="hidden md:block rounded-l-lg h-auto" />
				<div class="px-4 md:px-8 md:pr-12 md:py-8">
					<h4 class="font-montserrat text-sm text-zinc-400 tracking-[.5em] mb-6">PERFUME</h4>
					<h2 class="font-fraunces font-black text-4xl px-auto mb-6"><b>Gabrielle Essence Eau De Parfum</b></h2>
					<p class="font-montserrat text-zinc-400 mb-6">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
					<div class="flex items-center mb-4 md:mb-6">
						<h4 class="font-fraunces text-4xl font-black text-emerald-700"><b>$149.99</b></h4>
						<p class="font-montserrat pl-4 text-zinc-400"><s>$169.99</s></p>
					</div>
					<button class="flex items-center text-center justify-center bg-emerald-700 rounded-md w-full h-14 hover:bg-emerald-900 cursor-pointer">
						<img src={cart} alt="SVG image of shopping cart" />
						<p class="font-montserrat text-lg text-white pl-2"><b>Add to Cart</b></p>
					</button>
				</div>
			</div>
		</div>
	)
}
