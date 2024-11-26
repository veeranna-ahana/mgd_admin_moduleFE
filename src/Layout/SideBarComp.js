/** @format */

// /** @format */

// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { Link, useLocation } from "react-router-dom";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// // import SubMenuComp from "./SubNavComp";
// import { IconContext } from "react-icons/lib";
// import {
// 	customerSidebar,
// 	adminSidebar,
// 	MaterialSidebar,
// 	QuotationSidebar,
// } from "../components/SidebarData";
// import { FaAngleRight, FaAngleLeft, FaAngleDown } from "react-icons/fa";
// import SubNavComp from "./SubNavComp";

// const NavIcon = styled.div`
// 	margin-left: 2rem;
// 	font-size: 2rem;
// 	height: 80px;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center;
// `;

// const SidebarWrap = styled.div`
// 	width: 100%;
// 	background-color: #263159;
// `;

// const SidebarComp = () => {
// 	const location = useLocation();

// 	console.log(
// 		"LOCAL STORAGE DATA",
// 		JSON.parse(localStorage.getItem("LazerUser"))
// 	);

// 	const [newSideBarData, setNewSideBarData] = useState(customerSidebar);
// 	const [accessSideBarData, setAccessSideBarData] = useState([]);

// 	let [lazerUser, setLazerUser] = useState(
// 		JSON.parse(localStorage.getItem("LazerUser"))
// 	);

// 	const [sidebar, setSidebar] = useState(true);

// 	function showSidebar() {
// 		setSidebar(!sidebar);
// 	}

// 	//access information is present in laser user
// 	//modify the array in newSideBarData based on laserUserdata
// 	useEffect(() => {
// 		const tempArray = [...accessSideBarData]; //creating a copy of the accessSideBar

// 		//checking if Orders Main Menu is Present
// 		for (let a = 0; a < lazerUser.data.access.length; a++) {
// 			if (lazerUser.data.access[a]?.includes("/Customer/Orders")) {
// 				console.log("CUSTOMER - ORDERS IS PRESENT IN THE ACCESS");

// 				const customerOrdersObject = { ...newSideBarData[0] };
// 				const customerOrdersCreatedObject = { ...newSideBarData[0].subNav[0] };
// 				const customerOrdersRecordedObject = { ...newSideBarData[0].subNav[1] };
// 				const customerOrdersProcessingObject = {
// 					...newSideBarData[0].subNav[2],
// 				};
// 				const customerOrdersProducedObject = { ...newSideBarData[0].subNav[3] };
// 				const customerOrdersReadyObject = { ...newSideBarData[0].subNav[4] };
// 				const customerOrdersDispatchedObject = {
// 					...newSideBarData[0].subNav[5],
// 				};
// 				const customerOrdersAllObject = { ...newSideBarData[0].subNav[6] };

// 				delete customerOrdersObject.subNav;
// 				const subNav = [];

// 				for (let b = 0; b < lazerUser.data.access.length; b++) {
// 					if (
// 						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersCreated")
// 					) {
// 						subNav.push(customerOrdersCreatedObject);
// 					}
// 					if (
// 						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersRecorded")
// 					) {
// 						subNav.push(customerOrdersRecordedObject);
// 					}
// 					if (lazerUser.data.access[b]?.includes("/Orders/OrdersProcessing")) {
// 						subNav.push(customerOrdersProcessingObject);
// 					}
// 					if (
// 						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersProduced")
// 					) {
// 						subNav.push(customerOrdersProducedObject);
// 					}
// 					if (
// 						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersReady")
// 					) {
// 						subNav.push(customerOrdersReadyObject);
// 					}
// 					if (
// 						lazerUser.data.access[b]?.includes(
// 							"/Customer/Orders/OrdersDispatched"
// 						)
// 					) {
// 						subNav.push(customerOrdersDispatchedObject);
// 					}
// 					if (lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersAll")) {
// 						subNav.push(customerOrdersAllObject);
// 					}
// 				}

// 				customerOrdersObject.subNav = subNav;
// 				tempArray.push(customerOrdersObject);

// 				break;
// 			}
// 		}

// 		//Checking If Commercial Main Menu is Present
// 		for (let a = 0; a < lazerUser.data.access.length; a++) {
// 			if (lazerUser.data.access[a]?.includes("/Customer/Commercial")) {
// 				console.log("COMMERCIAL - ORDERS IS PRESENT IN THE ACCESS");

// 				const customerCommercialObject = { ...newSideBarData[1] };
// 				const customerCommercialInvoicePaymentsObject = {
// 					...newSideBarData[1].subNav[0],
// 				};
// 				const customerCommercialOSsummaryObject = {
// 					...newSideBarData[1].subNav[1],
// 				};

// 				delete customerCommercialObject.subNav;
// 				const subNav = [];

// 				for (let b = 0; b < lazerUser.data.access.length; b++) {
// 					if (
// 						lazerUser.data.access[b]?.includes(
// 							"/Customer/Commercial/CustomerInvoiceAndPayments"
// 						)
// 					) {
// 						subNav.push(customerCommercialInvoicePaymentsObject);
// 					}
// 					if (
// 						lazerUser.data.access[b]?.includes(
// 							"/Customer/Commercial/Outstandings"
// 						)
// 					) {
// 						subNav.push(customerCommercialOSsummaryObject);
// 					}
// 				}
// 				customerCommercialObject.subNav = subNav;
// 				tempArray.push(customerCommercialObject);
// 				break;
// 			}
// 		}

// 		//Checking if Customer - Material Page is present in the Access
// 		for (let a = 0; a < lazerUser.data.access.length; a++) {
// 			if (lazerUser.data.access[a]?.includes("/Customer/Material")) {
// 				const customerMaterialObject = { ...newSideBarData[2] };
// 				tempArray.push(customerMaterialObject);
// 			}
// 		}

// 		//Checking if Customer - Customers is present in the Access
// 		for (let a = 0; a < lazerUser.data.access.length; a++) {
// 			if (lazerUser.data.access[a]?.includes("/Customer/Customers")) {
// 				const customerCustomersObject = { ...newSideBarData[3] };
// 				const customerCustomersExistingCustomersObject = {
// 					...newSideBarData[3].subNav[0],
// 				};
// 				const customerCustomersNewCustomersObject = {
// 					...newSideBarData[3].subNav[1],
// 				};

// 				delete customerCustomersObject.subNav;
// 				const subNav = [];

// 				for (let b = 0; b < lazerUser.data.access.length; b++) {
// 					if (
// 						lazerUser.data.access[b]?.includes(
// 							"/Customer/Customers/ExistedCustomerInfo"
// 						)
// 					) {
// 						subNav.push(customerCustomersExistingCustomersObject);
// 					}
// 					if (
// 						lazerUser.data.access[b]?.includes("/Customer/Customers/CustomerNew")
// 					) {
// 						subNav.push(customerCustomersNewCustomersObject);
// 					}
// 				}
// 				customerCustomersObject.subNav = subNav;
// 				tempArray.push(customerCustomersObject);

// 				break;
// 			}
// 		}

// 		//Checking if Part List is present in the Access
// 		for (let a = 0; a < lazerUser.data.access.length; a++) {
// 			if (lazerUser.data.access[a]?.includes("/Customer/PartList")) {
// 				const customerPartListObject = { ...newSideBarData[4] };
// 				tempArray.push(customerPartListObject);
// 			}
// 		}

// 		//Checking if Drawing List is present in the Access
// 		for (let a = 0; a < lazerUser.data.access.length; a++) {
// 			if (lazerUser.data.access[a]?.includes("/Customer/DrawingList")) {
// 				const customerDrawingListObject = { ...newSideBarData[5] };
// 				tempArray.push(customerDrawingListObject);
// 			}
// 		}

// 		//Adding previous menu to sidebar
// 		const previousMenu = { ...newSideBarData[6] };
// 		tempArray.push(previousMenu);

// 		setAccessSideBarData(tempArray);
// 	}, []);

// 	return (
// 		<>
// 			<nav className={sidebar ? "side-nav" : '"side-nav '}>
// 				<SidebarWrap>
// 					<div className="admin-title ">
// 						{/* {sidebar && 'M A G O D'} */}
// 						{/* <img className="logo" src={require("../ML-LOGO1.png")} /> */}
// 						<img
// 							className="logo"
// 							src={require("../Magod-Laser-Logo - White.png")}
// 						/>
// 						{sidebar ? (
// 							<FaAngleRight
// 								className="toggle-icon"
// 								onClick={() => showSidebar()}
// 							/>
// 						) : (
// 							<FaAngleLeft
// 								className="toggle-icon"
// 								onClick={() => showSidebar()}
// 							/>
// 						)}
// 					</div>

// 					{(location.pathname.startsWith("/admin")
// 						? adminSidebar
// 						: //: customerSidebar
// 						  accessSideBarData
// 					)
// 						//  ? adminSidebar
// 						//  : QuotationSidebar
// 						.map((item, index) => {
// 							return (
// 								<SubNavComp
// 									item={item}
// 									key={index}
// 									sidebar={sidebar}
// 								/>
// 							);
// 						})}

// 					{/* {(lazerUser.data.access.includes("/admin") ? adminSidebar : null).map(
//             (item, index) => {
//               return <SubNavComp item={item} key={index} sidebar={sidebar} />;
//             }
//           )}
//           {(lazerUser.data.access.includes("/customer")
//             ? adminSidebar
//             : adminSidebar
//           ).map((item, index) => {
//             return <SubNavComp item={item} key={index} sidebar={sidebar} />;
//           })} */}
// 				</SidebarWrap>
// 			</nav>
// 		</>
// 	);
// };

// export default SidebarComp;

// -------------------new -----------------------
/** @format */

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import SubMenuComp from "./SubNavComp";
import { IconContext } from "react-icons/lib";
import {
	customerSidebar,
	adminSidebar,
	MaterialSidebar,
	QuotationSidebar,
} from "../components/SidebarData";
import { FaAngleRight, FaAngleLeft, FaAngleDown } from "react-icons/fa";
import SubNavComp from "./SubNavComp";

import { useContext } from "react";
import { MenusContext } from "../context/MenusContext";
import Cookies from "js-cookie";
const { endpoints } = require("../pages/api/constants");

const NavIcon = styled.div`
	margin-left: 2rem;
	font-size: 2rem;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const SidebarWrap = styled.div`
	width: 100%;
	background-color: #263159;
`;

const SidebarComp = () => {
	const location = useLocation();
	// Code unused

	// const userData = JSON.parse(Cookies.get("userData"));
	// console.log("User Data:", userData);

	// const { menusData } = useContext(MenusContext);
	// console.log("cnxt value123", menusData);

	console.log(
		"LOCAL STORAGE DATA",
		JSON.parse(localStorage.getItem("LazerUser"))
	);

	const [newSideBarData, setNewSideBarData] = useState(customerSidebar);
	const [accessSideBarData, setAccessSideBarData] = useState([]);

	let [lazerUser, setLazerUser] = useState(
		JSON.parse(localStorage.getItem("LazerUser"))
	);

	const [sidebar, setSidebar] = useState(true);

	function showSidebar() {
		setSidebar(!sidebar);
	}
	const [menuUrls, setMenuUrls] = useState([]);

	useEffect(() => {
		const tempArray = [...accessSideBarData];

		//checking if Orders Main Menu is Present
		for (let a = 0; a < lazerUser?.data.access.length; a++) {
			if (lazerUser.data.access[a]?.includes("/Customer/Orders")) {
				console.log("CUSTOMER - ORDERS IS PRESENT IN THE ACCESS");

				const customerOrdersObject = { ...newSideBarData[0] };
				const customerOrdersCreatedObject = { ...newSideBarData[0].subNav[0] };
				const customerOrdersRecordedObject = { ...newSideBarData[0].subNav[1] };
				const customerOrdersProcessingObject = {
					...newSideBarData[0].subNav[2],
				};
				const customerOrdersProducedObject = { ...newSideBarData[0].subNav[3] };
				const customerOrdersReadyObject = { ...newSideBarData[0].subNav[4] };
				const customerOrdersDispatchedObject = {
					...newSideBarData[0].subNav[5],
				};
				const customerOrdersAllObject = { ...newSideBarData[0].subNav[6] };

				delete customerOrdersObject.subNav;
				const subNav = [];

				for (let b = 0; b < lazerUser?.data.access.length; b++) {
					if (
						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersCreated")
					) {
						subNav.push(customerOrdersCreatedObject);
					}
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Orders/OrdersRecorded"
						)
					) {
						subNav.push(customerOrdersRecordedObject);
					}
					if (lazerUser.data.access[b]?.includes("/Orders/OrdersProcessing")) {
						subNav.push(customerOrdersProcessingObject);
					}
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Orders/OrdersProduced"
						)
					) {
						subNav.push(customerOrdersProducedObject);
					}
					if (
						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersReady")
					) {
						subNav.push(customerOrdersReadyObject);
					}
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Orders/OrdersDispatched"
						)
					) {
						subNav.push(customerOrdersDispatchedObject);
					}
					if (
						lazerUser.data.access[b]?.includes("/Customer/Orders/OrdersAll")
					) {
						subNav.push(customerOrdersAllObject);
					}
				}

				customerOrdersObject.subNav = subNav;
				tempArray.push(customerOrdersObject);

				break;
			}
		}

		//Checking If Commercial Main Menu is Present
		for (let a = 0; a < lazerUser?.data.access.length; a++) {
			if (lazerUser.data.access[a]?.includes("/Customer/Commercial")) {
				console.log("COMMERCIAL - ORDERS IS PRESENT IN THE ACCESS");

				const customerCommercialObject = { ...newSideBarData[1] };
				const customerCommercialInvoicePaymentsObject = {
					...newSideBarData[1].subNav[0],
				};
				const customerCommercialOSsummaryObject = {
					...newSideBarData[1].subNav[1],
				};

				delete customerCommercialObject.subNav;
				const subNav = [];

				for (let b = 0; b < lazerUser.data.access.length; b++) {
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Commercial/CustomerInvoiceAndPayments"
						)
					) {
						subNav.push(customerCommercialInvoicePaymentsObject);
					}
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Commercial/Outstandings"
						)
					) {
						subNav.push(customerCommercialOSsummaryObject);
					}
				}
				customerCommercialObject.subNav = subNav;
				tempArray.push(customerCommercialObject);
				break;
			}
		}

		//Checking if Customer - Material Page is present in the Access
		for (let a = 0; a < lazerUser?.data.access.length; a++) {
			if (
				lazerUser.data.access[a]?.includes("/Customer/Material") &&
				!tempArray.some((item) => item.title === newSideBarData[2].title)
			) {
				const customerMaterialObject = { ...newSideBarData[2] };
				tempArray.push(customerMaterialObject);
			}
		}

		//Checking if Customer - Customers is present in the Access
		for (let a = 0; a < lazerUser?.data.access.length; a++) {
			if (lazerUser.data.access[a]?.includes("/Customer/Customers")) {
				const customerCustomersObject = { ...newSideBarData[3] };
				const customerCustomersExistingCustomersObject = {
					...newSideBarData[3].subNav[0],
				};
				const customerCustomersNewCustomersObject = {
					...newSideBarData[3].subNav[1],
				};

				delete customerCustomersObject.subNav;
				const subNav = [];

				for (let b = 0; b < lazerUser.data.access.length; b++) {
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Customers/ExistedCustomerInfo"
						)
					) {
						subNav.push(customerCustomersExistingCustomersObject);
					}
					if (
						lazerUser.data.access[b]?.includes(
							"/Customer/Customers/CustomerNew"
						)
					) {
						subNav.push(customerCustomersNewCustomersObject);
					}
				}
				customerCustomersObject.subNav = subNav;
				tempArray.push(customerCustomersObject);

				break;
			}
		}

		//Checking if Part List is present in the Access
		for (let a = 0; a < lazerUser?.data.access.length; a++) {
			if (
				lazerUser.data.access[a]?.includes("/Customer/PartList") &&
				!tempArray.some((item) => item.title === newSideBarData[4].title)
			) {
				const customerPartListObject = { ...newSideBarData[4] };
				console.log("customerPartListObject", customerPartListObject);
				tempArray.push(customerPartListObject);
			}
		}

		//Checking if Drawing List is present in the Access
		for (let a = 0; a < lazerUser?.data.access.length; a++) {
			if (
				lazerUser.data.access[a]?.includes("/Customer/DrawingList") &&
				!tempArray.some((item) => item.title === newSideBarData[5].title)
			) {
				const customerDrawingListObject = { ...newSideBarData[5] };
				tempArray.push(customerDrawingListObject);
			}
		}

		//Adding previous menu to sidebar
		if (!tempArray.some((item) => item.title === newSideBarData[6].title)) {
			const previousMenu = { ...newSideBarData[6] };
			tempArray.push(previousMenu);
		}

		setAccessSideBarData(tempArray);
	}, []);

	console.log("access", accessSideBarData);

	return (
		<>
			<nav className={sidebar ? "side-nav" : '"side-nav '}>
				<SidebarWrap>
					<div className="admin-title ">
						{/* {sidebar && 'M A G O D'} */}
						{/* <img className="logo" src={require("../ML-LOGO1.png")} /> */}
						<img
							className="logo"
							src={require("../Magod-Laser-Logo - White.png")}
						/>
						{sidebar ? (
							<FaAngleRight
								className="toggle-icon"
								onClick={() => showSidebar()}
							/>
						) : (
							<FaAngleLeft
								className="toggle-icon"
								onClick={() => showSidebar()}
							/>
						)}
					</div>

					{(location.pathname.startsWith("/admin")
						? adminSidebar
						: //: customerSidebar
						  accessSideBarData
					)
						//  ? adminSidebar
						//  : QuotationSidebar
						.map((item, index) => {
							return (
								<SubNavComp
									item={item}
									key={index}
									sidebar={sidebar}
								/>
							);
						})}

					{/* {(lazerUser.data.access.includes("/admin") ? adminSidebar : null).map(
            (item, index) => {
              return <SubNavComp item={item} key={index} sidebar={sidebar} />;
            }
          )}
          {(lazerUser.data.access.includes("/customer")
            ? adminSidebar
            : adminSidebar
          ).map((item, index) => {
            return <SubNavComp item={item} key={index} sidebar={sidebar} />;
          })} */}
				</SidebarWrap>
			</nav>
		</>
	);
};

export default SidebarComp;
