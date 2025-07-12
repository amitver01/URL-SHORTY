import shortURL from "../models/shortURL.js";

export const analytics=async (req, res) => {
  try {
    const userId = req.user;
    //console.log(userId , "test")
    const urls = await shortURL.find({ user: userId.id }).sort({ createdAt: -1 });
    //console.log(urls);

    const totalClicks = urls.reduce((total, url) => total + url.no_click, 0);
    const totalLinks = urls.length;
    const avgClicks = totalLinks > 0 ? totalClicks / totalLinks : 0;
   
    // console.log(totalClicks);
    // console.log(totalLinks);
    // console.log(avgClicks);

    res.status(200).json({
      success: true,
      message: "User URLs fetched successfully",
      //ta: urls,
      totalLinks,totalClicks,avgClicks
    });
  } catch (error) {
    console.error("Error fetching user URLs:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch URLs",
    });
  }
};
