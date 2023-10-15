// <svelte:head>
// 	<!--set dark mode class based on user prefference / device settings (in head to avoid FOUC)-->
// 	<script>
// 		if (
// 			localStorage.theme == 'dark' ||
// 			(!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
// 		) {
// 			document.documentElement.classList.add('dark')
// 		} else {
// 			document.documentElement.classList.remove('dark')
// 		}
// 	</script>
// </svelte:head>

// <!--animated switch version-->
// <button
// 	class="{dark
// 		? 'bg-gray-600 focus:ring-gray-400 ring-offset-gray-700'
// 		: 'bg-yellow-100 focus:ring-yellow-400 ring-offset-white'} relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-2 focus:ring-offset-2 m-1"

// 	class:hidden
// 	type="button"
// 	aria-checked={dark}
// 	on:click={toggle}
// >
//  <!--moon icon-->
//  <i class="fa-duotone fa-moon {dark ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100'} absolute inset-0 h-full w-full flex items-center justify-center transition-opacity" aria-hidden="true" class:hidden={!dark}/>
//  <!-- sun icon-->
//  <i class="fa-duotone fa-brightness-low" class:hidden={dark} />
// </button>

