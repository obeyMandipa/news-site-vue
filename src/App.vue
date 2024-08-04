

<template>
  <div class="h-[80px] bg-gray-400 justify-between  flex p-4">
    <div class="font-bold text-[30px]">...NEWS</div>
    <div class=" flex justify-between w-[500px] bg-red-300">
      <input type="text" class="w-[370px] rounded">
      <img src="" alt="notification">
    </div>
  </div>
  <main class="flex justify-between bg-[#f7f3f3] ">
    <div class="categories w-[20%] h-[88vh] pl-[30px]">
      <div class="h-[525px] bg-white  rounded-xl mt-[120px]">
        <p class="p-[20px]  text-[18px] border-b-2 border-black">Categories</p>
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
          <div class="reactions flex w-[210px] justify-between ml-[auto] relative mt-[15px] pr-[10px]">
            <div class="h-[50px] w-[50px] rounded-full bg-blue-300"></div>
            <div class="h-[50px] w-[50px] rounded-full bg-blue-300"></div>
            <div class="h-[50px] w-[50px] rounded-full bg-blue-300"></div>
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
    <div class="relatednews  w-[30%] bg-green-200 pr-[30px]">
      <h2 class=" mt-[40px]  text-[25px] font-bold absolute">Related topics...</h2>
      <div class="mt-[120px] bg-white  h-[76vh] relative overflow-auto space-y-12">
        <div class="">
          <img src="" alt="" class="h-[300px] border rounded-xl border-black">
          <div class="reactions bg-red-300 pr-[10px]  relative mt-[15px]">
            <div class="h-[50px] w-[50px] rounded-full bg-blue-300 ml-[auto] "></div>
          </div>
          <h5 class="mt-[20px] text-[20px] font-bold">Turkey blocks Instagram access in “censorship” row after Hamas leader’s assassination</h5>
        </div>
        
        
      </div>
    </div>
  </main>
</template>

<script >

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
