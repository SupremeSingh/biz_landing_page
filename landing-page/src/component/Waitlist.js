const Waitlist = () => {
    return (
        <div class="bg-white">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Want updates on our progress?
      <br class="hidden sm:inline" />
      <span class="text-indigo-600">Subscribe to our Newsletter.</span>
    </h2>
    <form class="mt-8 sm:flex flex-row justify-center items-center">
      <input aria-label="Email address" type="email" required class="flex flex-col justify-center items-center appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email" />
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0 items-center">
        <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Subscribe
        </button>
      </div>
    </form>
  </div>
</div>
    );
};

export default Waitlist;