/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722353151", {
    template: `
    <div>
        <nav class="bg-white shadow-md dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
                <a href="#" class="flex items-center">
                    <img src="./images/logo.svg" class="h-10 mr-4" alt="BlockSight Logo" />
                    <span class="self-center text-3xl font-bold whitespace-nowrap text-purple-600 dark:text-purple-400">BlockSight</span>
                </a>
                <div class="flex md:order-2">
                    <button type="button" class="md:hidden text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-600 rounded-lg text-sm p-3 mr-2">
                        <i class='bx bx-menu text-2xl'></i>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-white bg-purple-600 rounded-lg md:bg-transparent md:text-purple-600 md:p-0 md:dark:text-purple-400 hover:bg-purple-700 md:hover:bg-transparent md:hover:text-purple-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-black rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-black rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 md:dark:hover:text-purple-400 dark:text-white dark:hover:bg-gray-800 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <footer id="footer-section" class="bg-white dark:bg-gray-900">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-16">
                <hr id="footer-divider" class="my-10 border-gray-200 sm:mx-auto dark:border-gray-700">
                <div id="footer-content" class="text-center">
                    <div class="flex justify-center mb-6">
                        <a id="footer-logo-link" href="#" class="flex items-center text-3xl font-bold text-purple-600 dark:text-purple-400">
                            <img id="footer-logo" src="./images/logo.svg" class="h-10 mr-4" alt="BlockSight Logo" />
                            BlockSight - Blockchain Analytics Suite
                        </a>
                    </div>
                </div>
                <div class="flex justify-center">
                    <div id="footer-text" class="max-w-2xl text-base text-center text-gray-700 dark:text-gray-300">
                        Gain real-time insights into blockchain data with BlockSight's powerful analytics tools. Monitor transactions, track assets, and uncover emerging trends across multiple blockchains. Stay ahead of the curve with our cutting-edge platform.
                    </div>
                </div>
            </div>
        </footer>
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
