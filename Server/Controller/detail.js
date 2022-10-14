import Detail from "../model/detail.js"

const createdetail = async (req, res) => {
    const { name, age, state, salty, spicy, sweet } = req.body
    try {
        const detail = await Detail.create({ name, age, state, salty, spicy, sweet });
        console.log(detail);
        res.status(201).json({ message: "Data added" })

    } catch (error) {
        console.log(error)
    }

}

const getdetail = async (req, res) => {
    try {
        const detail = await Detail.find();
        res.status(200).json(detail)
    } catch (error) {
        console.log(error);

    }
}

const deletedetail = async (req, res) => {
    try {
        const detail = await Detail.findById(req.params.id);
        await detail.remove();
        console.log(detail);
        res.send("user deleted")

    } catch (error) {
        console.log(error);
    }
}


const updatedetail = async (req, res) => {
    const { name, age, state, salty, spicy, sweet } = req.body
    try {
        const detail = await Detail.findByIdAndUpdate(req.params.id);

        console.log(detail);
        res.status(201).json({ message: "Data updated" })


    } catch (error) {
        console.log(error);
    }
}





export { createdetail, getdetail, deletedetail, updatedetail };