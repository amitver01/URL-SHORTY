import urlSchema from "../models/shortURL.js";

export const redirect_url=async (req, res) => {
    try {
        const { id } = req.params;
        const url = await urlSchema.findOneAndUpdate(
      { short_url: id },
      { $inc: { no_click: 1 } },
      { new: true }
    );

        if (url) {
            res.redirect(url.full_url);
        } else {
            res.status(404).send("Short URL not found");
        }
    } catch (error) {
        console.error("Error in redirecting:", error);
        res.status(500).send("Server error");
    }
}