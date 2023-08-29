import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const schema = z.object({
    Email: z.string().nonempty("Email is required").email("Invalid Email"),
    CETRank: z.string().nonempty("CET Rank is required"),
    CETRollNo: z.number(),
    IPUApplicationNo: z.string().nonempty("IPU Application No. is required"),
    NameStudent: z.string().nonempty("Name is required"),
    StudentContacatNo: z
      .number()
      .min(1000000000, "Invalid Contact No.")
      .max(9999999999, "Invalid Contact No."),
    StudentAdharCardNo: z
      .number()
      .min(100000000000, "Invalid Adhar Card No.")
      .max(999999999999, "Invalid Adhar Card No."),
    StudentEmailId: z
      .string()
      .nonempty("Email is required")
      .email("Invalid Email"),
    StudentDOB: z.string().nonempty("Date of Birth is required"),
    FatherName: z.string().nonempty("Father's Name is required"),
    FatherOccupation: z.string().nonempty("Father's Occupation is required"),
    FatherEmailId: z
      .string()
      .nonempty("Email is required")
      .email("Invalid Email"),
    MotherName: z.string().nonempty("Mother's Name is required"),
    MotherContactNo: z
      .number()
      .min(1000000000, "Invalid Contact No.")
      .max(9999999999, "Invalid Contact No."),
    MotherOccupation: z.string().nonempty("Mother's Occupation is required"),
    MotherEmail: z
      .string()
      .nonempty("Email is required")
      .email("Invalid Email"),
    AdmissionCategory: z.string().nonempty("Admission Category is required"),
    AreaOfResidence: z.string().nonempty("Area of Residence is required"),
    Gender: z.string().nonempty("Gender is required"),
    PermanentAddress: z.string().nonempty("Permanent Address is required"),
    CorrespondenceAddress: z
      .string()
      .nonempty("Correspondence Address is required"),
    Religion: z.string().nonempty("Religion is required"),
    Nationality: z.string().nonempty("Nationality is required"),
    TenthPercentage: z
      .number()
      .min(0, "Invalid Percentage")
      .max(100, "Invalid Percentage"),
    TwelthPercentage: z
      .number()
      .min(0, "Invalid Percentage")
      .max(100, "Invalid Percentage"),
  });

  const [admitCardImage, setAdmitCardImage] = useState(null);
  const [studentImage, setStudentImage] = useState(null);
  const [proofOfDOB, setProofOfDOB] = useState(null);
  const [cetRollImage, setCetRollImage] = useState(null);
  const [tenthCopy, setTenthCopy] = useState(null);
  const [twelthCopy, setTwelthCopy] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Email: "",
      CETRank: "",
      CETRollNo: "",
      IPUApplicationNo: "",
      NameStudent: "",
      StudentContacatNo: "",
      StudentAdharCardNo: "",
      StudentEmailId: "",
      StudentDOB: "",
      FatherName: "",
      FatherOccupation: "",
      FatherEmailId: "",
      MotherName: "",
      MotherContactNo: "",
      MotherOccupation: "",
      MotherEmail: "",
      AdmissionCategory: "",
      AreaOfResidence: "",
      Gender: "",
      PermanentAddress: "",
      CorrespondenceAddress: "",
      Religion: "",
      Nationality: "",
      TenthPercentage: "",
      TwelthPercentage: "",
    },
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <main>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sri Guru Tegh Bahadur Institute of Management and Information
            Technology - Registration Form for Management Quota Admission
            2023-25
          </Typography>
          <Box component={"form"} onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              {...register("Email")}
              error={!!errors.Email}
              helperText={errors.Email?.message}
              fullWidth
              autoComplete="email"
              margin="normal"
            />
            <TextField
              id="CETRank"
              label="CET Rank"
              variant="outlined"
              {...register("CETRank")}
              error={!!errors.CETRank}
              helperText={errors.CETRank?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="CETRollNo"
              label="CET Roll No."
              variant="outlined"
              {...register("CETRollNo", { valueAsNumber: true })}
              error={!!errors.CETRollNo}
              helperText={errors.CETRollNo?.message}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              id="IPUApplicationNo"
              label="IPU Application No."
              variant="outlined"
              {...register("IPUApplicationNo")}
              error={!!errors.IPUApplicationNo}
              helperText={errors.IPUApplicationNo?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <label htmlFor="admitcardimage" className="">
              <Typography variant="h5">Admit Card Image: </Typography>
            </label>
            <label className="ImageUplaodContainer" htmlFor="admitcardimage">
              <div>
                <span>+</span> Upload
              </div>
              <input
                type="file"
                name=""
                id="admitcardimage"
                onChange={(e) => {
                  setAdmitCardImage(e.target.files[0]);
                }}
                accept="image/jpeg, image/png"
              />
            </label>
            {admitCardImage && (
              <img
                className="w-1/2 rounded-md shadow-lg"
                src={URL.createObjectURL(admitCardImage)}
                alt="admitcardimage"
              />
            )}

            <TextField
              id="NameStudent"
              label="Student's Name"
              variant="outlined"
              {...register("NameStudent")}
              error={!!errors.NameStudent}
              helperText={errors.NameStudent?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="StudentContacatNo"
              label="Student's Contact No."
              variant="outlined"
              {...register("StudentContacatNo", { valueAsNumber: true })}
              error={!!errors.StudentContacatNo}
              helperText={errors.StudentContacatNo?.message}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              id="StudentAdharCardNo"
              label="Student's Aadhaar Card No."
              variant="outlined"
              {...register("StudentAdharCardNo", { valueAsNumber: true })}
              error={!!errors.StudentAdharCardNo}
              helperText={errors.StudentAdharCardNo?.message}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              id="StudentEmailId"
              label="Student's Email"
              variant="outlined"
              {...register("StudentEmailId")}
              error={!!errors.StudentEmailId}
              helperText={errors.StudentEmailId?.message}
              fullWidth
              type="email"
              margin="normal"
            />
            <label component="legend" htmlFor="StudentDOB">
              Student's Date of Birth
            </label>
            <TextField
              id="StudentDOB"
              variant="outlined"
              {...register("StudentDOB")}
              error={!!errors.StudentDOB}
              helperText={errors.StudentDOB?.message}
              fullWidth
              type="date"
              margin="normal"
            />
            <TextField
              id="FatherName"
              label="Father's Name"
              variant="outlined"
              {...register("FatherName")}
              error={!!errors.FatherName}
              helperText={errors.FatherName?.message}
              fullWidth
              type="text"
              margin="normal"
            />

            <TextField
              id="FatherOccupation"
              label="Father's Occupation"
              variant="outlined"
              {...register("FatherOccupation")}
              error={!!errors.FatherOccupation}
              helperText={errors.FatherOccupation?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="FatherEmailId"
              label="Father's Email"
              variant="outlined"
              {...register("FatherEmailId")}
              error={!!errors.FatherEmailId}
              helperText={errors.FatherEmailId?.message}
              fullWidth
              type="email"
              margin="normal"
            />
            <TextField
              id="MotherName"
              label="Mother's Name"
              variant="outlined"
              {...register("MotherName")}
              error={!!errors.MotherName}
              helperText={errors.MotherName?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="MotherContactNo"
              label="Mother's Contact No."
              variant="outlined"
              {...register("MotherContactNo", { valueAsNumber: true })}
              error={!!errors.MotherContactNo}
              helperText={errors.MotherContactNo?.message}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              id="MotherOccupation"
              label="Mother's Occupation"
              variant="outlined"
              {...register("MotherOccupation")}
              error={!!errors.MotherOccupation}
              helperText={errors.MotherOccupation?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="MotherEmail"
              label="Mother's Email"
              variant="outlined"
              {...register("MotherEmail")}
              error={!!errors.MotherEmail}
              helperText={errors.MotherEmail?.message}
              fullWidth
              type="email"
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel id="AdmissionCategory">Category</InputLabel>
              <Select
                labelId="AdmissionCategory"
                id="Admission-Category-Select"
                label="Category"
                {...register("AdmissionCategory")}
                error={!!errors.AdmissionCategory}
                helperText={errors.AdmissionCategory?.message}
                fullWidth
                type="text"
                margin="normal"
              >
                <MenuItem value={"General"}>General</MenuItem>
                <MenuItem value={"General (Out Side Delhi)"}>
                  General (Out Side Delhi)
                </MenuItem>
                <MenuItem value={"SC"}>SC</MenuItem>
                <MenuItem value={"SC (Out Side Delhi)"}>
                  SC (Out Side Delhi)
                </MenuItem>
                <MenuItem value={"ST"}>ST</MenuItem>
                <MenuItem value={"OBC"}>OBC</MenuItem>
                <MenuItem value={"PH"}>PH</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="AreaOfResidence">Area of Residence</InputLabel>
              <Select
                labelId="AreaOfResidence"
                id="Area-Of-Residence-Select"
                label="Area Of Residence"
                {...register("AreaOfResidence")}
                error={!!errors.AreaOfResidence}
                helperText={errors.AreaOfResidence?.message}
                fullWidth
                type="text"
                margin="normal"
              >
                <MenuItem value={"Rural"}>Rural</MenuItem>
                <MenuItem value={"Urban"}>Urban</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="Gender">Gender</InputLabel>
              <Select
                labelId="Gender"
                id="Area-Of-Residence-Select"
                label="Gender"
                {...register("Gender")}
                error={!!errors.Gender}
                helperText={errors.Gender?.message}
                fullWidth
                type="text"
                margin="normal"
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="PermanentAddress"
              label="Permanent Address"
              variant="outlined"
              {...register("PermanentAddress")}
              error={!!errors.PermanentAddress}
              helperText={errors.PermanentAddress?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="CorrespondenceAddress"
              label="Correspondence Address"
              variant="outlined"
              {...register("CorrespondenceAddress")}
              error={!!errors.CorrespondenceAddress}
              helperText={errors.CorrespondenceAddress?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="Religion"
              label="Religion"
              variant="outlined"
              {...register("Religion")}
              error={!!errors.Religion}
              helperText={errors.Religion?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="Nationality"
              label="Nationality"
              variant="outlined"
              {...register("Nationality")}
              error={!!errors.Nationality}
              helperText={errors.Nationality?.message}
              fullWidth
              type="text"
              margin="normal"
            />
            <TextField
              id="TenthPercentage"
              label="TenthPercentage"
              variant="outlined"
              {...register("TenthPercentage", { valueAsNumber: true })}
              error={!!errors.TenthPercentage}
              helperText={errors.TenthPercentage?.message}
              fullWidth
              type="number"
              margin="normal"
            />
            <TextField
              id="TwelthPercentage"
              label="TwelthPercentage"
              variant="outlined"
              {...register("TwelthPercentage", { valueAsNumber: true })}
              error={!!errors.TwelthPercentage}
              helperText={errors.TwelthPercentage?.message}
              fullWidth
              type="number"
              margin="normal"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <label htmlFor="studentimage" className="">
              <Typography variant="h5">Student Image: </Typography>
            </label>
            <label className="ImageUplaodContainer" htmlFor="studentimage">
              <div>
                <span>+</span> Upload
              </div>
              <input
                type="file"
                name=""
                id="studentimage"
                onChange={(e) => {
                  setStudentImage(e.target.files[0]);
                }}
                accept=" image/jpeg"
              />
            </label>
            {studentImage && (
              <img
                className="w-1/2 rounded-md shadow-lg mb-5"
                src={URL.createObjectURL(studentImage)}
                alt="studentimage"
              />
            )}
            <label htmlFor="proofofdob" className="">
              <Typography variant="h5">Proof of DOB: </Typography>
            </label>
            <label className="ImageUplaodContainer" htmlFor="proofofdob">
              <div>
                <span>+</span> Upload
              </div>
              <input
                type="file"
                name=""
                id="proofofdob"
                onChange={(e) => {
                  setProofOfDOB(e.target.files[0]);
                }}
                accept=" image/jpeg"
              />
            </label>
            {proofOfDOB && (
              <img
                className="w-1/2 rounded-md shadow-lg mb-5"
                src={URL.createObjectURL(proofOfDOB)}
                alt="proofofdob"
              />
            )}
            <label htmlFor="cetrollimage" className="">
              <Typography variant="h5">CET Roll Image: </Typography>
            </label>
            <label className="ImageUplaodContainer" htmlFor="cetrollimage">
              <div>
                <span>+</span> Upload
              </div>
              <input
                type="file"
                name=""
                id="cetrollimage"
                onChange={(e) => {
                  setCetRollImage(e.target.files[0]);
                }}
                accept=" image/jpeg"
              />
            </label>
            {cetRollImage && (
              <img
                className="w-1/2 rounded-md shadow-lg mb-5"
                src={URL.createObjectURL(cetRollImage)}
                alt="cetrollimage"
              />
            )}
            <label htmlFor="tenthcopy" className="">
              <Typography variant="h5">10th Copy: </Typography>
            </label>
            <label className="ImageUplaodContainer" htmlFor="tenthcopy">
              <div>
                <span>+</span> Upload
              </div>
              <input
                type="file"
                name=""
                id="tenthcopy"
                onChange={(e) => {
                  setTenthCopy(e.target.files[0]);
                }}
                accept=" image/jpeg"
              />
            </label>
            {tenthCopy && (
              <img
                className="w-1/2 rounded-md shadow-lg mb-5"
                src={URL.createObjectURL(tenthCopy)}
                alt="tenthcopy"
              />
            )}
            <label htmlFor="twelthcopy" className="">
              <Typography variant="h5">12th Copy: </Typography>
            </label>

            <label className="ImageUplaodContainer" htmlFor="twelthcopy">
              <div>
                <span>+</span> Upload
              </div>
              <input
                type="file"
                name=""
                id="twelthcopy"
                onChange={(e) => {
                  setTwelthCopy(e.target.files[0]);
                }}
                accept=" image/jpeg"
              />
            </label>
            {twelthCopy && (
              <img
                className="w-1/2 rounded-md shadow-lg mb-5"
                src={URL.createObjectURL(twelthCopy)}
                alt="twelthcopy"
              />
            )}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Form;
