import {useEffect, useState} from 'react';
import st from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {lessonCreate} from '@redux/actions';
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  Link,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";

export const Lessons = () => {
    const dispatch = useDispatch();
	const {isLoadLesson, dataLesson} = useSelector((state) => state.lesson);
	console.log('dataLesson', dataLesson);
	// useEffect(() => {
	// 	dispatch(postsGet());
	// }, []);
	const [list, setList] =  useState({teacherId: "", classId: "", className: "", gameType: "", gameTime: ""})
	const startDataStudentLesson = {
		idBracelet: "",
		name: "",
		answer: [{
			correct: false,
			timeNeeded: "",
			question: {
				subject: "",
				topic: "",
				id: "",
				content: "",
			}
		}]
	};
	const [studentLesson, setStudentLesson] = useState([{
		idBracelet: "",
		name: "",
		answer: [{
			correct: false,
			timeNeeded: "",
			question: {
				subject: "",
				topic: "",
				id: "",
				content: "",
			}
		}]
	}]);
	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100%"
			width="100%"

		>
			<Typography color="textPrimary" variant="h2">
				Create Lesson
			</Typography>
				<Box
					maxWidth="200px"
				>
					<Formik
						initialValues={{
							teacherId: "",
							classId: "",
							className: "",
							gameType: "",
							gameTime: "",
						}}
						validationSchema={Yup.object().shape({
							teacherId: Yup.string().max(255).required("teacherId is required"),
							classId: Yup.string().max(255).required("classId is required"),
							className: Yup.string().max(255).required("className is required"),
							gameType: Yup.string().max(255).required("gameType is required"),
							gameTime: Yup.string().max(255).required("gameTime is required"),
						})}
						onSubmit={(values, { setSubmitting }) => {
							setList(values);
							setSubmitting(false);
						}}
					>
						{({
							errors,
							handleBlur,
							handleChange,
							handleSubmit,
							isSubmitting,
							touched,
							values,
						}) => (
							<form onSubmit={handleSubmit}>
								<Typography color="textPrimary" variant="h7">
									Lesson
								</Typography>
								<TextField
									error={Boolean(touched.teacherId && errors.teacherId)}
									fullWidth
									helperText={touched.teacherId && errors.teacherId}
									label="teacherId"
									margin="normal"
									name="teacherId"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.teacherId}
									variant="outlined"
									size='small'
								/>
								<TextField
									error={Boolean(touched.classId && errors.classId)}
									fullWidth
									helperText={touched.classId && errors.classId}
									label="classId"
									margin="normal"
									name="classId"
									onBlur={handleBlur}
									onChange={handleChange}
									type="classId"
									value={values.classId}
									variant="outlined"
									size='small'
								/>
								<TextField
									error={Boolean(touched.className && errors.className)}
									fullWidth
									helperText={touched.className && errors.className}
									label="className"
									margin="normal"
									name="className"
									onBlur={handleBlur}
									onChange={handleChange}
									type="className"
									value={values.className}
									variant="outlined"
									size='small'
								/>
								<TextField
									error={Boolean(touched.gameType && errors.gameType)}
									fullWidth
									helperText={touched.gameType && errors.gameType}
									label="gameType"
									margin="normal"
									name="gameType"
									onBlur={handleBlur}
									onChange={handleChange}
									type="gameType"
									value={values.gameType}
									variant="outlined"
									size='small'
								/>
								<TextField
									error={Boolean(touched.gameTime && errors.gameTime)}
									fullWidth
									helperText={touched.gameTime && errors.gameTime}
									label="gameTime"
									margin="normal"
									name="gameTime"
									onBlur={handleBlur}
									onChange={handleChange}
									type="gameTime"
									value={values.gameTime}
									variant="outlined"
									size='small'
								/>
								<Box my={2}>
									<Button
										color="primary"
										disabled={isSubmitting}
										fullWidth
										size="large"
										type="submit"
										variant="contained"
									>
										Save Lesson
									</Button>
								</Box>
							</form>
						)}
					</Formik>
				</Box>
				{studentLesson.map((item, index) => (
					<Box
						display="flex"
						mb={5}
					>
						<Box maxWidth="200px" mr={5}>
							<Formik
								initialValues={{
									idBracelet: "",
									name: "",
								}}
								validationSchema={Yup.object().shape({
									idBracelet: Yup.string().max(255).required("idBracelet is required"),
									name: Yup.string().max(255).required("name is required"),
			
								})}
								onSubmit={(values, { setSubmitting }) => {
									setStudentLesson((prevState) => {
										const arr = prevState;
										arr[index].idBracelet = values.idBracelet;
										arr[index].name = values.name;
										return [...arr];
									});
									setSubmitting(false);
								}}
							>
								{({
									errors,
									handleBlur,
									handleChange,
									handleSubmit,
									isSubmitting,
									touched,
									values,
								}) => (
									<form onSubmit={handleSubmit}>
										<Typography color="textPrimary" variant="h7">
											One Student Lesson
										</Typography>
										<TextField
											error={Boolean(touched.idBracelet && errors.idBracelet)}
											fullWidth
											helperText={touched.idBracelet && errors.idBracelet}
											label="idBracelet"
											margin="normal"
											name="idBracelet"
											onBlur={handleBlur}
											onChange={handleChange}
											value={values.idBracelet}
											variant="outlined"
											size='small'
										/>
										<TextField
											error={Boolean(touched.name && errors.name)}
											fullWidth
											helperText={touched.name && errors.name}
											label="name"
											margin="normal"
											name="name"
											onBlur={handleBlur}
											onChange={handleChange}
											type="name"
											value={values.name}
											variant="outlined"
											size='small'
										/>
										<Box my={2}>
											<Button
												color="primary"
												disabled={isSubmitting}
												fullWidth
												size="large"
												type="submit"
												variant="contained"
											>
												Save Student
											</Button>
										</Box>
									</form>
								)}
							</Formik>
							<Button
								color="primary"
								fullWidth
								size="large"
								onClick={() => {
									setStudentLesson((prevState) => {
										const arr = prevState;
										return [...arr, startDataStudentLesson];
									})
								}}
								type="submit"
								variant="contained"
							>
								Add Student
							</Button>
						</Box>
						{item.answer.map((questionCurrent, indexQuestion) => (
							<Box
								maxWidth="200px"
								mr={5}
							>
								<Formik
									initialValues={{
										timeNeeded: "",
										subject: "",
										topic: "",
										id: "",
										content: "",
									}}
									validationSchema={Yup.object().shape({
										timeNeeded: Yup.string().max(255).required("timeNeeded is required"),
										subject: Yup.string().max(255).required("subject is required"),
										topic: Yup.string().max(255).required("topic is required"),
										id: Yup.string().max(255).required("id is required"),
										content: Yup.string().max(255).required("content is required"),
									})}
									onSubmit={(values, { setSubmitting }) => {
										setStudentLesson((prevState) => {
											const arr = prevState;
											arr[index].answer[indexQuestion].timeNeeded = values.timeNeeded;
											arr[index].answer[indexQuestion].question.subject = values.subject;
											arr[index].answer[indexQuestion].question.topic = values.topic;
											arr[index].answer[indexQuestion].question.id = values.id;
											arr[index].answer[indexQuestion].question.content = values.content;
											return [...arr]
										});
										setSubmitting(false);
									}}
								>
									{({
										errors,
										handleBlur,
										handleChange,
										handleSubmit,
										isSubmitting,
										touched,
										values,
									}) => (
										<form onSubmit={handleSubmit}>
											<Typography color="textPrimary" variant="h7">
												Answer
											</Typography>
											<TextField
												error={Boolean(touched.timeNeeded && errors.timeNeeded)}
												fullWidth
												helperText={touched.timeNeeded && errors.timeNeeded}
												label="timeNeeded"
												margin="normal"
												name="timeNeeded"
												onBlur={handleBlur}
												onChange={handleChange}
												value={values.timeNeeded}
												variant="outlined"
												size='small'
											/>
											<TextField
												error={Boolean(touched.subject && errors.subject)}
												fullWidth
												helperText={touched.subject && errors.subject}
												label="subject"
												margin="normal"
												name="subject"
												onBlur={handleBlur}
												onChange={handleChange}
												type="subject"
												value={values.subject}
												variant="outlined"
												size='small'
											/>
											<TextField
												error={Boolean(touched.topic && errors.topic)}
												fullWidth
												helperText={touched.topic && errors.topic}
												label="topic"
												margin="normal"
												name="topic"
												onBlur={handleBlur}
												onChange={handleChange}
												type="topic"
												value={values.topic}
												variant="outlined"
												size='small'
											/>
											<TextField
												error={Boolean(touched.id && errors.id)}
												fullWidth
												helperText={touched.id && errors.id}
												label="id"
												margin="normal"
												name="id"
												onBlur={handleBlur}
												onChange={handleChange}
												type="id"
												value={values.id}
												variant="outlined"
												size='small'
											/>
											<TextField
												error={Boolean(touched.content && errors.content)}
												fullWidth
												helperText={touched.content && errors.content}
												label="content"
												margin="normal"
												name="content"
												onBlur={handleBlur}
												onChange={handleChange}
												type="content"
												value={values.content}
												variant="outlined"
												size='small'
											/>
											<Box my={2}>
												<Button
													color="primary"
													disabled={isSubmitting}
													fullWidth
													size="large"
													type="submit"
													variant="contained"
												>
													Save Answer
												</Button>
											</Box>
										</form>
									)}
								</Formik>
								<Button
									color="primary"
									fullWidth
									size="large"
									onClick={() => {
										setStudentLesson((prevState) => {
											const arr = prevState;
											arr[index].answer.push(startDataStudentLesson.answer[0]);
											return [...arr];
										})
									}}
									type="submit"
									variant="contained"
								>
									Add Answer
								</Button>
							</Box>
						))}
					</Box>
				))}
				<Box
					display="flex"
					flexDirection="column"
					maxWidth="400px"
				>
					<Button
						color="primary"
						onClick={() => {
							const request = {...list, data: studentLesson}
							console.log('request now students', request)
						}}
						size="large"
						type="submit"
						variant="contained"
						style={{margin: "40px 0 20px 0"}}
					>
						Console Request
					</Button>
					<Button
						color="primary"
						onClick={() => {
							const request = {...list, data: studentLesson}
							dispatch(lessonCreate(request));
						}}
						size="large"
						type="submit"
						variant="contained"
						style={{margin: "0 0 20px 0"}}
					>
						Send Request
					</Button>
				</Box>
		</Box>
	);
};
