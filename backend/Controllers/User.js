const User=require("../Modals/User")
exports.userdetails=async(req,res)=>{
    try {
        const { name, email, phone, institution, requirements } = req.body;

        if (!name || !email || !phone || !institution) {
          return res.status(400).json({ message: "All required fields must be filled" });
        }
        const checkinguser = await User.findOne({ email });
        if (checkinguser) {
            return res.status(400).json({
                success: false,
                message: "Email already exists. Please use a different email.",
            });
        }
       
        await User.create({ name, email, phone, institution, requirements});

        return res.status(201).json({
            success:true,
            message:"Message saved successfully",
        
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Error OCccured",
            error:error.message
        })
    }
}