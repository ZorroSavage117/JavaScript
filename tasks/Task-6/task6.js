// Youtube link: https://youtu.be/DZLPtq8Ib2g

function response(s_or_p) {
    switch (s_or_p) {
      case 1:
        document.getElementById("response").textContent = "Nice";
        s_count();
        break;
      case 0:
        document.getElementById("response").textContent = "Ok than";
        p_count();
        break;
      default:
        document.getElementById("response").textContent = "";
    }
  
    // console.log("test: response has run");
  
    update_waifu();
  }

  function s_count() {
    let get_count = document.getElementById("s_count");
    let is_count = get_count.textContent
    let count = parseInt(is_count, 10) + 1;
    // console.log("test: s_count.count data type (after):" + typeof count);
    document.getElementById("s_count").textContent = count;
  }

  function p_count() {
    let get_count = document.getElementById("p_count");
    let is_count = get_count.textContent
    let count = parseInt(is_count, 10) + 1;
    document.getElementById("p_count").textContent = count;
  }
  
  async function update_waifu() {
    try {
      const image_url = await fetch_image();
      console.log('Image URL:', image_url);
      document.getElementById("waifu").setAttribute("src", image_url);
    } catch (error) {
      console.error('An error occurred:', error.message);
    }
  
    // console.log("test: update_waifu has run");
  }
  
  async function fetch_image() {  // copied from there API site with some minor changes with help form someone more versed in js
    const apiUrl = 'https://api.waifu.im/search';
    const params = {};
  
    const queryParams = new URLSearchParams(params);
    const requestUrl = `${apiUrl}?${queryParams}`;
  
    try {
      const response = await fetch(requestUrl);
  
      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.images[0].url;
        return imageUrl;
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    } catch (error) {
      throw error;
    }
  }
  
  update_waifu();

  document.getElementById("smash").addEventListener("click", () => response(1));
  document.getElementById("pass").addEventListener("click", () => response(0));
  