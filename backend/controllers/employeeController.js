import employeeModel from "../models/employeeModel.js";
import userModel from "../models/userModel.js";
import compressImages from "compress-images";
import fs from "fs";

export const addEmployee = async (req, res) => {
  console.log("_______________________________________________");
  console.log("ADD EMPLOYEE ENDPOINT HIT");
  console.log("_______________________________________________");

  let { id, img, name, role, desc, dept } = req.body;

  const descLimit = 400;

  if (!name) {
    return res
      .status(400)
      .json({ success: false, message: "Employee must have a name" });
  }

  if (!role) {
    return res
      .status(400)
      .json({ success: false, message: "Employee must have a role" });
  }

  if (!desc || desc.length > descLimit) {
    return res.status(400).json({
      success: false,
      message: `Employee must have a description under ${descLimit} characters`,
    });
  }

  if (!dept) {
    return res.status(400).json({
      success: false,
      message: "Employee must be assigned to a department",
    });
  }

  if (!id) {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Please give employee an Image" });
    }

    const imageName = req.file.filename;
    const imagePath = req.file.path;

    const compressedFilePath = "uploads/employee-images/" + imageName;
    const compression = 60;

    compressImages(
      imagePath,
      compressedFilePath,
      {
        compress_force: false,
        statistic: true,
        autoupdate: true,
      },
      false,
      { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
      {
        png: {
          engine: "pngquant",
          command: ["--quality=" + compression + "-" + compression, "-o"],
        },
      },
      { svg: { engine: "svgo", command: "--multipass" } },
      {
        gif: {
          engine: "gifsicle",
          command: ["--colors", "64", "--use-col=web"],
        },
      },
      async (error, completed, statistic) => {
        console.log("______");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("______");

        fs.unlink(imagePath, (err) => {
          if (err) throw err;
        });

        if (error) {
          return res
            .status(500)
            .json({ success: false, message: "Could not upload image" });
        }

        const employee = new employeeModel({
          img: imageName,
          name,
          role,
          desc,
          dept,
        });

        try {
          await employee.save();
          return res
            .status(200)
            .json({ success: true, message: `${name} Added` });
        } catch (error) {
          console.log(error);
          res.status(500).json({
            success: false,
            message: "Something went wrong somewhere",
          });
        }
      }
    );
  } else {
    if (req.file) {
      const imageName = req.file.filename;
      const imagePath = req.file.path;

      const compressedFilePath = "uploads/employee-images/" + imageName;
      const compression = 60;
      compressImages(
        imagePath,
        compressedFilePath,
        {
          compress_force: false,
          statistic: true,
          autoupdate: true,
        },
        false,
        { jpg: { engine: "mozjpeg", command: ["-quality", compression] } },
        {
          png: {
            engine: "pngquant",
            command: ["--quality=" + compression + "-" + compression, "-o"],
          },
        },
        { svg: { engine: "svgo", command: "--multipass" } },
        {
          gif: {
            engine: "gifsicle",
            command: ["--colors", "64", "--use-col=web"],
          },
        },
        async (error, completed, statistic) => {
          console.log("______");
          console.log(error);
          console.log(completed);
          console.log(statistic);
          console.log("______");

          fs.unlink(imagePath, (err) => {
            if (err) throw err;
          });

          if (error) {
            return res
              .status(500)
              .json({ success: false, message: "Could not upload image" });
          }

          employeeModel
            .findOneAndUpdate(
              { _id: id },
              {
                img: imageName,
                name,
                role,
                desc,
                dept,
              }
            )
            .then((employee) => {
              return res.status(200).json({
                success: true,
                message: `${name} Added`,
                data: employee,
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                success: false,
                message: "Something went wrong somewhere",
              });
            });
        }
      );
    } else {
      employeeModel
        .findOneAndUpdate(
          { _id: id },
          {
            img,
            name,
            role,
            desc,
            dept,
          }
        )
        .then((employee) => {
          return res.status(200).json({
            success: true,
            message: `${name} ${id ? "Updated" : "Added"}`,
            data: employee,
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            success: false,
            message: "Something went wrong somewhere",
          });
        });
    }
  }
};

export const listEmployees = async (req, res) => {
  console.log("_______________________________________________");
  console.log("LIST EMPLOYEES ENDPOINT HIT");
  console.log("_______________________________________________");

  let { dept } = req.body;

  try {
    const employees = await employeeModel.find({ dept });
    res.status(200).json({
      success: true,
      message: "Employees retrieved successfully",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "Something went wrong somewhere" });
  }
};

export const removeEmployee = async (req, res) => {
  console.log("_______________________________________________");
  console.log("DELETE EMPLOYEE ENDPOINT HIT");
  console.log("_______________________________________________");

  let { id } = req.body;

  employeeModel
    .findOneAndDelete({ _id: id })
    .then((employee) => {
      res
        .status(200)
        .json({ success: true, message: `${employee.name} removed` });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ success: false, message: "Something went wrong somewhere" });
    });
};
