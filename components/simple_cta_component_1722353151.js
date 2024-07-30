/* Summary: This component contains a sidebar with navigation links and a CTA section with a title, subtitle, and button. */
Vue.component("simple_cta_component_1722353151", {
    template: `
    <div class="flex">
        <aside class="w-64 h-screen bg-gray-100 dark:bg-gray-900 p-6">
            <nav>
                <ul class="space-y-4">
                    <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Home</a></li>
                    <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">About</a></li>
                    <li><a href="#" class="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">Contact</a></li>
                </ul>
            </nav>
        </aside>
        <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
            <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                    <div id="cta-title-container" class="flex">
                        <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Unveil the Future of Blockchain Analytics</h2>
                    </div>

                    <div id="cta-subtitle-container" class="flex">
                        <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Harness cutting-edge technology to gain unparalleled insights into emerging blockchain data.</p>
                    </div>
                    
                    <div id="cta-button-container" class="flex">
                        <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Explore Blockchain Analytics</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});