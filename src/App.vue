

<template>
  <div class="h-[80px] bg-[#ffffff] justify-between shadow-xl flex p-4">
    <div class=" text-[30px] ml-[30px] font-black">NEWS</div>
    <div class=" flex justify-between w-[430px]">
      <label class="input input-bordered flex items-center gap-2">
        <input type="text" class="grow w-[300px]" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70">
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd" />
        </svg>
      </label>
      <div class="indicator">
        <span class="indicator-item badge badge-secondary h-[30px] w-[30px] mt-[5px] mr-[5px] text-white font-bold bg-black border-white">1</span>
        <div class="bg-base-300 grid h-[50px] w-[50px] rounded-full place-items-center"> <img src="@/assets/icons/bell.png" alt=""></div>
      </div>
    </div>
  </div>
  <main class="flex justify-between bg-[#ffffff] ">
    <div class="categories w-[20%] h-[88vh] pl-[30px]">
      <div class="h-[525px] bg-white  rounded-xl mt-[120px]">
        <p class="p-[20px]  text-[18px] border-b-2 border-black">Categories</p>

        <button @click="fetchNews">Yahoo News</button>
      </div>
      <div class="h-[200px] bg-white  rounded-xl mt-[20px]">
        <p class="p-[20px]  text-[18px] border-b-2 border-black" >Settings</p>
      </div>
    </div>
    <div class="newsheadlines  w-[45%] ">
      <h2 class=" mt-[40px]  text-[25px] font-bold absolute">News category...</h2>
      <div class=" mt-[120px]  h-[76vh] relative overflow-auto space-y-12">
          <div class="bg-white">
            <img src="" alt="" class="h-[300px] border rounded-xl border-black">
            <div class="reactions flex w-[180px] ml-[auto] justify-between relative mt-[15px] pr-[10px]">
              <label class="swap ">
                  <input type="checkbox" />
                  <div class="swap-off "><img src="@/assets/icons/hate.png" alt="like" class="h-[30px] w-[30px]"></div>
                  <div class="swap-on"><img src="@/assets/icons/like.png" alt="hate" class="h-[30px] w-[30px]"></div>
                </label>
                
              <div class="h-[50px] w-[50px] rounded-full flex justify-center items-center">
                <img src="@/assets/icons/share.png" alt="hate" class="h-[30px] w-[30px]">
              </div>
              <div class="indicator">
                <span class="indicator-item badge badge-secondary bg-black border-2 h-[30px] w-[30px] text-white font-bold mt-[7px] m-[5px] border-white">99</span>
                <div class="h-[50px] w-[50px] rounded-full flex justify-center items-center">
                  <img src="@/assets/icons/read.png" alt="hate" class="h-[30px] w-[30px]">
                </div>
              </div>
            </div>
          <h5 class="mt-[20px] text-[25px] font-bold">Turkey blocks Instagram access in “censorship” row after Hamas leader’s assassination</h5>
          <p class="author text-[18px] font-serif">R.O Mandipa</p>
            <p class="mt-[20px] text-[17px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aperiam itaque temporibus vero, exercitationem voluptate assumenda molestias quaerat, ipsa tempora dolorem veritatis ea possimus eaque, voluptates beatae ullam quis totam!

            You'll want to evaluate almost every model you ever build. In most (though not all) applications, the relevant measure of model quality is predictive accuracy. In other words, will the model's predictions be close to what actually happens.

            Many people make a huge mistake when measuring predictive accuracy. They make predictions with their training data and compare those predictions to the target values in the training data. You'll see the problem with this approach and how to solve it in a moment, but let's think about how we'd do this first.

            You'd first need to summarize the model quality into an understandable way. If you compare predicted and actual home values for 10,000 houses, you'll likely find mix of good and bad predictions. Looking through a list of 10,000 predicted and actual values would be pointless. We need to summarize this into a single metric.
            </p>
          </div>
        </div>
    </div>
    <div class="relatednews  w-[30%] pr-[30px]">
      <h2 class=" mt-[40px]  text-[25px] font-bold absolute">Related topics...</h2>
      <div class="mt-[120px]   h-[76vh] relative overflow-auto space-y-12">
        <div class="bg-white">
          <img src="" alt="" class="h-[300px] border rounded-xl border-black">
          <div class="reactions pr-[10px]  relative mt-[15px]">
            <div class="h-[50px] w-[50px] rounded-full  ml-[auto] ">
              <div class="indicator">
              <span class="indicator-item badge badge-secondary bg-black border-2 h-[30px] w-[30px] text-white font-bold mt-[7px] m-[5px] border-white">40</span>
              <div class="h-[50px] w-[50px] rounded-full flex justify-center items-center">
                <img src="@/assets/icons/read.png" alt="hate" class="h-[30px] w-[30px]">
              </div>
            </div>
            </div>
          </div>
          <h5 class="mt-[20px] text-[20px] font-bold">Turkey blocks Instagram access in “censorship” row after Hamas leader’s assassination</h5>
        </div>
        
        
      </div>
    </div>

    
  </main>
</template>

<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      newsData: []
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    fetchNews(){
      fetch('http://localhost:8080/https://riad-news-api.vercel.app/api/news/source?code=US-FN')
      .then(response => response.json())
      .then(data => {
        this.newsData = data.data; // Assuming the news articles are stored in the 'articles' property
        console.log(this.newsData);
      })
      .catch(error => console.error('Error fetching news:', error));
        }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}


</style>
