<main class="bg-white p-[1.5rem] w-[50rem] rounded-[10px]">
  <div class="flex mb-[1.25rem] justify-between items-center">
    <h1 class="flex items-center gap-[10px] font-SansExtraBold text-[20px]">
      Notifications <span class={noti}>3</span>
    </h1>
    {#if state == true}
    <button class="font-SansMed text-darkGreyishBlue hover:text-blue" on:click={onClick}>
      {text}
    </button>
    {:else if state == false}
    <button class="font-SansMed text-darkGreyishBlue hover:text-blue" on:click={onClick2}>
      {text}
    </button>
    {/if}
  </div>
  {#each contentOne as content}
    <article class={cont}>
      <img src={content.img} width="40" alt=""/>
      <section class="ml-[1rem]">
        <div class="flex items-center justify-center">
          <p class="font-SansExtraBold text-vdBlue cursor-pointer hover:text-blue">
            {content.name}
          </p>
          <span class="ml-[6px] font-SansMed text-darkGreyishBlue">{content.action}</span>
          <span class={content.class}>{content.post} </span>
          <span class=" ml-[1px] font-SansExtraBold text-blue cursor-pointer hover:text-blue">{content.chat}</span>
          <span class={content.classDiv}></span>
        </div>
        <p class="font-SansMed text-GreyishBlue">{content.time}</p>
      </section>
    </article>
  {/each}
  <article class="flex mb-[0.5rem] p-[1rem]">
    <img src={Rizky} alt="" width="40"/>
    <section class="ml-[1rem]">
      <div class="flex items-center">
        <p class="font-SansExtraBold text-vdBlue cursor-pointer hover:text-blue">
          Rizky Hasanuddin
        </p>
        <p class="ml-[6px] font-SansMed text-darkGreyishBlue">sent you a private message</p>
      </div>
      <p class="font-SansMed text-GreyishBlue">5 days ago</p>
      <div class="font-SansMed mt-[0.8rem] border-GreyishBlue text-darkGreyishBlue border-[.13rem] rounded-[7px] p-[1rem] w-[35rem] hover:bg-GreyBlueO hover:border-transparent cursor-pointer">
        Hello, thanks for setting up the chess club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.
      </div>
    </section>
  </article>
  {#each contentTwo as content}
    <article class={content.class}>
      <div class="flex" >
        <img src={content.img} width="40" alt=""/>
        <section class="ml-[1rem]">
          <div class="flex items-center justify-center mb-[3px]">
            <p>
              <span class="font-SansExtraBold text-vdBlue cursor-pointer hover:text-blue">{content.name}</span>
              <span class="ml-[3.5px] font-SansMed text-darkGreyishBlue">{content.action}</span>
              <span class="font-SansExtraBold ml-[3px] text-darkGreyishBlue cursor-pointer hover:text-blue">{content.post}</span>
              <span class=" ml-[0px] font-SansExtraBold text-blue cursor-pointer hover:text-blue">{content.chat}</span>
            </p>
            
          </div>
          <p class="font-SansMed text-GreyishBlue">{content.time}</p>
        </section>
      </div>
      <div class={content.classDiv}>
        <img src={content.picture} width="40" alt=""/>
      </div>
    </article>
  {/each}
</main>

<script lang="ts">
  import Angela from "../../src/avatar-angela-gray.webp"
  import Anna from "../../src/avatar-anna-kim.webp"
  import Jacob from "../../src/avatar-jacob-thompson.webp"
  import Kimberly from "../../src/avatar-kimberly-smith.webp"
  import Mark from "../../src/avatar-mark-webber.webp"
  import Nathan from "../../src/avatar-nathan-peterson.webp"
  import Rizky from "../../src/avatar-rizky-hasanuddin.webp"
  import Chess from "../../src/image-chess.webp"
  let noti = "font-SansExtraBold bg-blue text-white py-[0.2rem] px-[0.75rem] rounded-[7px] text-[15px]"
  let dot = "bg-red h-[10px] w-[10px] rounded-[50%] ml-[0.3rem] mt-[.1rem]"
  let dot2 = "bg-red h-[10px] w-[10px] rounded-[50%] ml-[0.3rem] mt-[.23rem]"
  let cont = "flex items-center mb-[0.8rem] bg-GreyBlueO p-[1.2rem] w-[47rem] rounded-[7px]"
  let text = "Mark all as read"
  let state = true
  const onClick = () => {
    noti = "hidden"
    dot = "hidden"
    dot2 = "hidden"
    cont = "flex items-center mb-[0.8rem] bg-white p-[1.2rem] w-[47rem] rounded-[7px]"
    text = "Mark all as unread"
    state = false
    contentOne.forEach((content) => {
      content.classDiv = "hidden";
      contentOne = contentOne;
      console.log(content.classDiv)
    });
  }
  const onClick2 = () => {
    noti = "font-SansExtraBold bg-blue text-white py-[0.2rem] px-[0.75rem] rounded-[7px] text-[15px]"
    dot = "bg-red h-[10px] w-[10px] rounded-[50%] ml-[0.3rem] mt-[.1rem]"
    dot2 = "bg-red h-[10px] w-[10px] rounded-[50%] ml-[0.3rem] mt-[.2rem]"
    cont = "flex items-center mb-[0.8rem] bg-GreyBlueO p-[1.2rem] w-[47rem] rounded-[7px]"
    text = "Mark all as read"
    state = true
    contentOne.forEach((content, index) => {
      if (index === 0) {
        content.classDiv = dot;
      } else if (index === 1) {
        content.classDiv = dot2;
      } else {
        content.classDiv = dot;
      }
      contentOne = contentOne;
    });
  }
  let contentOne = [
    {
      img:Mark,
      name:"Mark Weber",
      action: "reacted to your recent post",
      post: "My first tournament today!",
      chat: "",
      time: "1m ago",
      class: "font-SansExtraBold ml-[6px] text-darkGreyishBlue cursor-pointer hover:text-blue",
      classDiv:dot
    },
    {
      img:Angela,
      name:"Angela Gray",
      action: "followed you",
      post: "",
      chat: "",
      time: "5m ago",
      class: "font-SansExtraBold ml-[-1px]  text-darkGreyishBlue cursor-pointer hover:text-blue",
      classDiv:dot2
    },
    {
      img:Jacob,
      name:"Jacob Thompson",
      action: "has joined your group",
      post: "",
      chat: "Chess club",
      time: "1 day ago",
      class: "font-SansExtraBold ml-[6px]  text-darkGreyishBlue cursor-pointer hover:text-blue",
      classDiv:dot
    }
  ]
  const contentTwo = [
    {
      img:Kimberly,
      name:"Kimberly Smith",
      action: "commented on your picture",
      picture:Chess,
      post: "",
      chat: "",
      time: "1 week ago",
      class:"flex mb-[1rem] p-[0.7rem] justify-between items-center",
      classDiv:"hover:border-GreyishBlue border-[.13rem] border-transparent cursor-pointer rounded-[7px] h-[47px] w-[47px] hover:bg-GreyBlueT flex items-center justify-center"
    },
    {
      img:Nathan,
      name:"Nathan Peterson",
      action: "reacted to your recent post",
      picture:"",
      chat:"",
      post: "5 end-game strategies to increase your win rate",
      time: "2 weeks ago",
      class:"flex mb-[1rem] p-[0.7rem] items-center",
      classDiv:"hidden"
    },
    {
      img:Anna,
      name:"Anna Kim",
      action: "left the group",
      picture:"",
      chat: "Chess club",
      post:"",
      time: "2 weeks ago",
      class:"flex p-[0.7rem] items-center",
      classDiv:"hidden"
    },
  ]
</script>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.GreyBlueT);
  }
  img{
    height: fit-content;
  }
  main{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
</style>