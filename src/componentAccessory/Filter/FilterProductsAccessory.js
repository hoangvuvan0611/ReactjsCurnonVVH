

import {connect} from "react-redux";
import {toggleSort} from "../../reduxModule";
import {toggleSp} from "../../reduxModule";
import {toggleSz} from "../../reduxModule";
import {toggleCl} from "../../reduxModule";
import {toggleCld} from "../../reduxModule";
import {toggleBackground} from "../../reduxModule";
import {toggleSortTop} from "../../reduxModule";
import {toggleSortCenter} from "../../reduxModule";
import {toggleSortBottom} from "../../reduxModule";
//filter
import {typeProductsAccessory} from "../../reduxModule"
//statusChooseProductFilter
import {toggleStatusChooseVtmen} from "../../reduxModule"
import {toggleStatusChoosePkmen} from "../../reduxModule"
import {toggleStatusChoosePkwomen} from "../../reduxModule"
import {toggleStatusChooseVtwomen} from "../../reduxModule"
import {toggleStatusChooseVt} from "../../reduxModule"
import {toggleStatusChooseAutu} from "../../reduxModule"
//statusChooseProductFilterColor
import {typeProductAccessoryColor} from "../../reduxModule"
import {toggleStatusChooseSilver} from "../../reduxModule"
import {toggleStatusChooseRosegold} from "../../reduxModule"
import {toggleStatusChooseBlack} from "../../reduxModule"
import {toggleStatusChooseWhite} from "../../reduxModule"
import {toggleStatusChooseGrey} from "../../reduxModule"
//sortPrice
import {SortProductPriceAccessory} from "../../reduxModule"
//reset
import {toggleResetAccessory} from "../../reduxModule"

function FilterProductsAccessory(props){

    let {toggleBackground, statusSp, toggleSp, statusSz, toggleSz, statusCl, toggleCl, statusCld, toggleCld} = props;

    let {statusSortTop, toggleSortTop, statusSortCenter, toggleSortCenter, statusSortBottom, toggleSortBottom, statusSort, toggleSort} = props;
    //filter
    let {typeProductsAccessory} = props;
    //statusChooseProductFilter
    let {statusVtmen, toggleStatusChooseVtmen, statusPkmen, toggleStatusChoosePkmen, statusPkwomen, toggleStatusChoosePkwomen, statusVtwomen, toggleStatusChooseVtwomen, statusVt, toggleStatusChooseVt, statusAutu, toggleStatusChooseAutu} = props;
    //statusChooseProductFilterColor
    let {statusSilver, toggleStatusChooseSilver, statusRosegold, toggleStatusChooseRosegold, statusBlack, toggleStatusChooseBlack, statusWhite, toggleStatusChooseWhite, statusGrey, toggleStatusChooseGrey, typeProductAccessoryColor} = props;
    //sortPrice
    let {SortProductPriceAccessory, countProductAccessory} = props;
    //reset
    let {toggleResetAccessory} = props;

    return(
        <div className="filterproducts">
            <div className="filterproducts_title">ph??? ki???n</div>
            <div className="filterproducts_content d-flex">
                <div className="left">Kh???ng ?????nh c?? t??nh, phong c??c c???a b???n th??n b???ng nh???ng s???n ph???m ph??? ki???n kh??ng th??? thi???u t??? Curnon.</div>
                <div className="right">{countProductAccessory.amount} tr??n 35 s???n ph???m</div>
            </div>
            <div className="filterproducts_box d-flex">
                <div className="col-6">
                    <button className="collection" onClick={() => (toggleSp(true))}>
                        <span>B??? S??U T???P</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <button className="color" onClick={() => (toggleCl(true))}>                        
                        <span>M??U S???C</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <div className="box">
                        {
                            statusSp &&
                            <div className="SP">
                                <div className="sp d-flex">
                                    <div className='product' onClick={() => (typeProductsAccessory("vtnam"), toggleStatusChooseVtmen(true))}>
                                        {
                                            statusVtmen && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FCuff_1.png&w=128&q=75)`}}></button>
                                        <div>V??ng tay nam</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductsAccessory("vtnam"), toggleStatusChoosePkmen(true))}>
                                        {
                                            statusPkmen && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwatch.5b9e72ca.png&w=128&q=75)`}}></button>
                                        <div>ph??? ki???n nam</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductsAccessory("pknu"), toggleStatusChoosePkwomen(true))}>
                                        {
                                            statusPkwomen && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwatch.5b9e72ca.png&w=128&q=75)`}}></button>
                                        <div>ph??? ki???n n???</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductsAccessory("vtnu"), toggleStatusChooseVtwomen(true))}>
                                        {
                                            statusVtwomen && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwatch.5b9e72ca.png&w=128&q=75)`}}></button>
                                        <div>V??ng tay n???</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductsAccessory("vt"), toggleStatusChooseVt(true))}>
                                        {
                                            statusVt && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwatch.5b9e72ca.png&w=128&q=75)`}}></button>
                                        <div>V??ng tay</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductsAccessory("autumn"), toggleStatusChooseAutu(true))}>
                                        {
                                            statusAutu && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwatch.5b9e72ca.png&w=128&q=75)`}}></button>
                                        <div>autumn collection</div>
                                    </div>
                                </div>
                                <div className="feature d-flex">
                                    <div className="left d-flex">
                                        <input type="checkbox"/>
                                        <span>???n s???n ph???m h???t h??ng</span>
                                    </div>
                                    <div className="center">56 s???n ph???m ph?? h???p</div>
                                    <div className="right" onClick={() => toggleResetAccessory()}>Reset</div>
                                </div>
                            </div>
                                
                        }
                        {
                            statusCl &&
                                <div className="CL">

                                    <div className="cl d-flex">
                                        <div className="color" onClick={() => (toggleStatusChooseSilver(true), typeProductAccessoryColor("silver"))}>
                                            {
                                                statusSilver && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                            }
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsilver.7ef4c25d.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Silver</div>
                                        </div>
                                        <div className="color" onClick={() => (toggleStatusChooseRosegold(true), typeProductAccessoryColor("rosegold"))}>
                                            {
                                                statusRosegold && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                            }
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Frosegold.1b34d8c5.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Rosegold</div>
                                        </div>
                                        <div className="color" onClick={() => (toggleStatusChooseBlack(true), typeProductAccessoryColor("black"))}>
                                            {
                                                statusBlack && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                            }
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fblack.abe55f81.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Black</div>
                                        </div>
                                        <div className="color" onClick={() => (toggleStatusChooseWhite(true), typeProductAccessoryColor("white"))}>
                                            {
                                                statusWhite && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                            }
                                            <div className="boderimg">
                                            </div>
                                            <div className="name">White</div>
                                        </div>
                                        <div className="color" onClick={() => (toggleStatusChooseGrey(true), typeProductAccessoryColor("grey"))}>
                                            {
                                                statusGrey && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                            }
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgrey.3ebfa42e.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Grey</div>
                                        </div>
                                    </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>???n s???n ph???m h???t h??ng</span>
                                        </div>
                                        <div className="center">56  s???n ph???m ph?? h???p</div>
                                        <div className="right" onClick={() => toggleResetAccessory()}>Reset</div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <button className="sort col-2">
                    <div onClick={() => (toggleSort(true))}>
                        <span>S???P X???P THEO</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                    {
                        statusSort &&
                            <div className="sortprice">
                                <div className="default" onClick={() => (toggleSortTop(true), SortProductPriceAccessory("default"))}>
                                    <span>M???c ?????nh</span>
                                    {
                                        statusSortTop && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                                <div className="default" onClick={() => (toggleSortCenter(true), SortProductPriceAccessory("increase"))}>
                                    <span>Gi?? t??ng d???n</span>
                                    {
                                        statusSortCenter && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                                <div className="default" onClick={() => (toggleSortBottom(true), SortProductPriceAccessory("reduce"))}>
                                    <span>Gi?? gi???m d???n</span>
                                    {
                                        statusSortBottom && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                            </div>
                    }
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    statusSp: state.statusSp,
    statusSz: state.statusSz,
    statusCl: state.statusCl,
    statusCld: state.statusCld,
    
    statusSort: state.statusSort,
    productFilterMen: state.productFilterMen,
    statusSortTop: state.statusCheckSortTop,
    statusSortCenter: state.statusCheckSortCenter,
    statusSortBottom: state.statusCheckSortBottom,
    
    statusBackground: state.statusBackground,
    //count
    countProductAccessory: state.countProductAccessory,
    //statusChooseProductFilter
    statusVtmen: state.statusVtmen,
    statusPkmen: state.statusPkmen,
    statusPkwomen: state.statusPkwomen,
    statusVtwomen: state.statusVtwomen,
    statusVt: state.statusVt,
    statusAutu: state.statusAutu,
    //statusChooseProductFilterColor
    statusSilver: state.statusSilver,
    statusRosegold: state.statusRosegold,
    statusBlack: state.statusBlack,
    statusWhite: state.statusWhite,
    statusGrey: state.statusGrey,
})

const mapDispatchToProps = { 
    toggleSort,
    toggleSp,
    toggleSz, 
    toggleCl, 
    toggleCld,

    toggleBackground, 
    toggleSortTop, 
    toggleSortCenter, 
    toggleSortBottom ,

    //filter
    typeProductsAccessory,
    //statusChooseProductFilter
    toggleStatusChooseVtmen,
    toggleStatusChoosePkmen,
    toggleStatusChoosePkwomen,
    toggleStatusChooseVtwomen,
    toggleStatusChooseVt,
    toggleStatusChooseAutu,
    //statusChooseProductFilterColor
    typeProductAccessoryColor,
    toggleStatusChooseSilver,
    toggleStatusChooseRosegold,
    toggleStatusChooseBlack,
    toggleStatusChooseWhite,
    toggleStatusChooseGrey,
    //sortprice
    SortProductPriceAccessory,
    //reset
    toggleResetAccessory,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProductsAccessory)