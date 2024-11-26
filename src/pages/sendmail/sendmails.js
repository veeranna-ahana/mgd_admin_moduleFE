/** @format */

import React, { useEffect, useRef } from "react";
import { Col, Row, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { Buffer } from "buffer";
import { toast } from "react-toastify";

const {
	// getRequest,
	// postRequest,
	postRequestFormData,
} = require("../api/apiinstance");
const { endpoints } = require("../api/constants");

function SendMail() {
	const [searchParams] = useSearchParams();
	// let history = useHistory();
	// let [formMessageBody, setFormMessageBody] = useState("");
	// let [formSubject, setFormSubject] = useState("");
	const isFirstClickRef = useRef(true);

	useEffect(() => {
		console.log(searchParams.get("mlbody"));
		// setFormMessageBody(searchParams.get("mlbody"));
		document.getElementById("formMessageBody").value = Buffer.from(
			searchParams.get("mlbody"),
			"base64"
		).toString("ascii");
		document.getElementById("formSubject").value = Buffer.from(
			searchParams.get("mlsubjct"),
			"base64"
		).toString("ascii");
	}, []);

	const sendmaildetails = (e) => {
		e.preventDefault();
		console.log("mail details");
		let from = document.getElementById("fromInput").value;
		let mailto = e.target.elements.formToAddress.value;
		let copyto = e.target.elements.formCCAddress.value;
		let subject = e.target.elements.formSubject.value;
		let mailbody = e.target.elements.formMessageBody.value;
		let files = e.target.attachments.files;

		let formData = new FormData();

		formData.append("toAddress", mailto);
		formData.append("ccAddress", copyto);
		formData.append("subjectLine", subject);
		formData.append("mailBody", mailbody);
		formData.append("file", files[0]);
		formData.append("fromAddress", from);

		postRequestFormData(endpoints.sendAttachmentMails, formData, (data) => {
			if (data != null) {
				if (isFirstClickRef.current) {
					toast.success("Email Sent Successfully..", {
						autoClose: 2000, // Timeout in milliseconds (e.g., 3000ms = 3 seconds)
					});
					isFirstClickRef.current = false;
				}

				setTimeout(() => {
					window.close();
				}, 3000);
			}
		});
	};

	// let closesendmail = () => {
	//   // alert("Closing Email..");
	//   toast.error("Closing Email..");
	//   // window.close();
	//   window.location.href = "/Customer/CustomerInvoiceAndPayments";
	//   //  navigate(-1);
	// };

	let closesendmail = () => {
		if (isFirstClickRef.current) {
			toast.success("Closing Email..", {
				autoClose: 2000, // Timeout in milliseconds (e.g., 3000ms = 3 seconds)
			});
			isFirstClickRef.current = false;
		}

		setTimeout(() => {
			// window.location.href = "/Customer/CustomerInvoiceAndPayments";
			window.close();
		}, 3000);
	};
	return (
		<div>
			<h4 className="title">Send Mail</h4>

			<div className="form-style">
				<Col xs={12}>
					<div className="addquotecard">
						<Form
							style={{ padding: "0px 10px" }}
							onSubmit={sendmaildetails}
							autoComplete="off">
							{/* <Row>
                                        <Form.Label style={{ width: '100px', height: '30px', fontFamily: 'Roboto', fontSize: '14px' }}>From</Form.Label>
                                        <Form.Control type="text" controlId="fromaddress" value={fromaddress} style={{ width: '200px', height: '30px', fontFamily: 'Roboto', fontSize: '14px' }} />
                                    </Row> */}

							<Form.Group
								className=" row"
								controlId="from">
								<div
									className=" col-md-4 "
									style={{ gap: "65px" }}>
									<label className="form-label">From</label>
									<Form.Control
										type="text"
										id="fromInput"
										style={{ fontSize: "12px" }}
									/>
								</div>
							</Form.Group>
							<Form.Group
								className="row"
								controlId="formToAddress">
								<div className="col-md-4">
									<label className="form-label">To</label>
									<Form.Control
										type="text"
										required
									/>
								</div>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="formCCAddress">
								<div className="col-md-4">
									<label className="form-label">CC</label>
									<Form.Control type="text" />
								</div>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="attachments">
								<div className="col-md-4">
									<label className="form-label">Attachments</label>
									<Form.Control
										type="file"
										required
									/>
								</div>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="formSubject">
								<div className="col-md-10">
									<label className="form-label">Subject</label>
									<Form.Control type="text" />
								</div>
							</Form.Group>
							<Form.Group
								as={Row}
								controlId="formMessageBody">
								<div className="col-md-10">
									<label className="form-label">Message</label>
									<Form.Control
										as="textarea"
										rows={50}
										style={{ height: "250px", overflowY: "scroll" }}
									/>
								</div>
							</Form.Group>

							<Form.Group className="row justify-content-center mt-3 mb-5">
								<button
									type="submit"
									className="button-style"
									style={{ width: "206px" }}>
									Send Mail
								</button>
								<button
									type="button"
									className="button-style"
									id="close"
									onClick={closesendmail}
									style={{ width: "110px" }}>
									Close
								</button>
							</Form.Group>
						</Form>
					</div>
				</Col>
			</div>
		</div>
	);
}

export default SendMail;
