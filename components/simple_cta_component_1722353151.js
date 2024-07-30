/* Summary: This component contains a sidebar with navigation links and a CTA section with a title, subtitle, and button. */
Vue.component("simple_cta_component_1722353151", {
    template: `
    <div class="flex">
        <aside class="w-64 h-screen bg-white p-6 shadow-md">
            <nav>
                <ul class="space-y-4">
                    <li><a href="#" class="text-gray-800 hover:text-purple-600">Home</a></li>
                    <li><a href="#" class="text-gray-800 hover:text-purple-600">About</a></li>
                    <li><a href="#" class="text-gray-800 hover:text-purple-600">Contact</a></li>
                </ul>
            </nav>
        </aside>
        <section id="cta-component" class="bg-white flex-1">
            <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                    <div id="cta-title-container" class="flex">
                        <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900">Unveil the Future of Blockchain Analytics</h2>
                    </div>

                    <div id="cta-subtitle-container" class="flex">
                        <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-600 md:text-lg">Harness cutting-edge technology to gain unparalleled insights into emerging blockchain data.</p>
                    </div>
                    
                    <div id="cta-button-container" class="flex">
                        <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Explore Blockchain Analytics</a>
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