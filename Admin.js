import React, { useEffect, useState } from 'react';
import {
    title,
    threeButtons,
    button,
    dateInput,
    inputfields,
} from './rcp.module.css';
import './rcpstyles.css';
import { navigate } from 'gatsby';

const SearchInbox = () => {
    const [inputValues, setInputValues] = useState({
        appNumber: '',
        typeOfCall: '',
        callStatus: '',
        callType: '',
        dispositionStatus: '',
        policyStatus: '',
        premiumFrequency: '',
        premiumSuspense: '',
        countOfAttempt: '',
        callGenerationFromDate: '',
        callGenerationToDate: '',
        subDispositionFromDate: '',
        subDispositionToDate: '',
        followUpCallFromDate: '',
        followUpCallToDate: '',
        assignmentStatus: '',
        currentlyAssigned: '',
        subDisposition: '',
        medicalRequired: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value,
        });
    };

    const [selectedOptions, setSelectedOptions] = useState({
        channel: '',
        zone: '',
        annualPremium: '',
    });

    const handleMultipleChange = (event) => {
        const { name, selectedOptions } = event.target;
        const options = Array.from(selectedOptions, (option) => option.value);
        setSelectedOptions({ ...selectedOptions, [name]: options });
    };


    const channels = [
        'All',
        'Canara',
        'HSBC',
        'PNB',
        'HO',
        'PGB',
        'sGB',
        'HISL',
        'SMGB',
        'PBC HSBC',
        'Defence Agency',
    ];
    const zones = ['All', 'North', 'South', 'East', 'West'];
    const annualPremiums = [
        'All',
        '0 to <25000',
        '25000 to <50000',
        '50000 to <100000',
        '100000 to <200000',
        '200000 to <500000',
        '500000 to <1000000',
        '>=1000000',
    ];

    const dispositionStatus = ['All',
        'New - Validation',
        'Validation call done',
        'Customer busy',
        'Customer not available',
        'Customer not interested',
        'Customer overseas',
        'Incorrect number',
        'Validation call done - concern raised',
        'Validation call done - medical concern',
        'Language barrier',
        'Do not call',
        'No response',
        'System down',
        'VC is on hold',
        'Dailler Non Connect'
    ]

    const subDispositions = [
        'Already paid - yet to be received',
        'Claim - Intimation',
        'Promised to pay',
        'CRU - Compliant',
        'Customer Not Interested',
        'Do Not Call',
        'Pending for requirements',
        'Re-debit request approved',
        'Reminder call done',
        'Vendor collection scheduled',
        'Alternate overseas number',
        'Call Back Request',
        'Customer Busy',
        'Customer Not Avaialble',
        'Language Barrier',
        'No Answer',
        'Not Reachable',
        'SP/RM - Follow up promised',
        'SP/RM - Promised instrument collection',
        'Customer Overseas',
        'Incorrect Number',
        'Switch Off',
        'Customer asked to call SP/RM/Acc/Other',
        'Refused to pay',
        'Promised to Submit',
        'Medical Completed',
        'Medical Scheduled',
        'Requirement Complete',
        'Refunded',
        'Refund Requested After Failed Attempts',
        'Awaiting Courier',
        'CRO Intervention Required',
        'Claim - Incidence',
        'CRU - Incidence',
        'Engagement call done',
        'Customer not interested to speak',
        'Customer not disclosing any detail',
        'Customer wants to surrender within lock in period',
        'Customer wants to surrender outside lock in period',
        'Customer wants to give ACC',
        'Language barrier - Bengali',
        'Language barrier - Gujarati',
        'Language barrier - Hindi',
        'Language barrier - Kannada',
        'Language barrier - Marathi',
        'Language barrier - Malayalam',
        'Language barrier - Punjabi',
        'Language barrier - Tamil',
        'Language barrier - Telugu',
        'Language barrier - Others',
        'Customer wants to meet / visit from policy advisor',
        'Sales intervention required',
        'Customer shifted abroad',
        'Contact details updated',
        'Email Id updated',
        'Alternate numbers updated',
        'Customer wants to opt for paid up status',
        'Exclusion Type Account Number',
        'ACC / Surrender Letter Received',
        'Abort-Customer Hung Up On Hold',
        'Busy',
        'Call forward no answer',
        'CC No Route (Numbering Plan cannot resolve number)',
        'Connect After Hold',
        'Dial Request Failed',
        'Dialer Dropped Cust After Hold',
        'Fax Machine',
        'Line Busy',
        'Network Announcement',
        'No Dial Tone',
        'No Ring Back',
        'No Voice Detect',
        'Reorder',
        'Simple Far End Connect',
        'SIT Tone',
        'Vacant Circuit',
        'Disposition Missed',
        'No Disposition',
        'Dialer Non Connect',
        'Customer Interested - Financial Problem',
    ];
    const medicals = ['All', 'Medical', 'Non Medical'];

    const assignmentStatus = ['All', 'Assigned', 'Unassigned'];

    const currentlyAssigned = ['All', 'Yes', 'No'];

    const [results, setResults] = useState('');
    const handleFilter = () => {
        setResults('1');
    };
    const handleClear = () => {
        setInputValues({
            appNumber: '',
            typeOfCall: '',
            callStatus: '',
            callType: '',
            dispositionStatus: '',
            policyStatus: '',
            premiumFrequency: '',
            premiumSuspense: '',
            countOfAttempt: '',
            callGenerationFromDate: '',
            callGenerationToDate: '',
            subDispositionFromDate: '',
            subDispositionToDate: '',
            followUpCallFromDate: '',
            followUpCallToDate: '',
            assignmentStatus: '',
            currentlyAssigned: '',
            subDisposition: '',
            medicalRequired: '',
        });
        setSelectedOptions({
            channel: '',
            zone: '',
            annualPremium: '',
        });
        setResults('');
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setData(data.slice(0, 1)))
            .catch((error) => console.log(error));
    }, []);

    const handleClick = () => {
        navigate('/check');
    };

    return (
        <div className='ms-3 '>
            <h3 style={{ marginBottom: '25px' }} className={title}>
                Search Inbox Details
            </h3>
            <div>
                <p>
                    <b>Enter Filter Parameters</b>
                    <br />
                    <span style={{ color: '#641919', fontStyle: 'italic' }}>
                        (Please follow Defence Channel Script. Calling should be done
                        between 5 PM and 7 PM)
                    </span>
                </p>
            </div>
            <div className='parameters'>
                <table
                    style={{ width: '88vw' }}
                    className='table table-bordered tabledesign'
                >
                    <tbody>
                        <tr>
                           <th>Retail policies</th>
                           <th>Group policies
                           <input
                  type='radio'
                  value='Yes'
                  name='yes'
                  checked='yes'
                  onChange={(event) => handleRadioChange2(event, index, 'yes')}
                />
                           </th>
                        </tr>
                        <tr>
                            <th style={{ width: "18%" }}></th>
                            <th>PMS User ID</th>
                            <td>Tester1</td>
                            <th>Call Status</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='callStatus'
                                    value={inputValues.callStatus}
                                    onChange={handleInputChange}
                                >
                                    <option value='new'>New</option>
                                    <option value='all'>All</option>
                                    <option value='completed'>Completed</option>
                                    <option value='pending'>Pending</option>
                                    <option value='lapsed'>Lapsed</option>
                                    <option value='dishonored'>Dishonored</option>
                                    <option value='overdue'>Overdue</option>
                                    <option value='engagement'>Engagement</option>
                                    <option value='engagementAutoclosed'>
                                        Engagement- Auto Closed
                                    </option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <th>Applicatio No.</th>
                            <td>
                                <input
                                    className={inputfields}
                                    name='appNumber'
                                    type='number'
                                    value={inputValues.appNumber}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <th>Type Of Call</th>
                            <td>
                                <input
                                    className={inputfields}
                                    name='typeOfCall'
                                    type='text'
                                    value={inputValues.typeOfCall}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <th>Call Type</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='callType'
                                    value={inputValues.callType}
                                    onChange={handleInputChange}
                                >

                                    <option value='validation'>Validation</option>

                                </select>
                            </td>
                            <th>Disposition Status</th>
                            <td>
                                <select
                                  className={inputfields}
                                  style={{ width: '165px' }}
                                  name='dispositionStatus'
                                  value={inputValues.dispositionStatus}
                                  onChange={handleInputChange}
                              >
                                  {dispositionStatus.map((dispositionStatus) => (
                                      <option key={dispositionStatus} value={dispositionStatus}>
                                          {dispositionStatus}
                                      </option>
                                  ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Call generation Date</th>
                            <td>
                                From{' '}
                                <input
                                    className={dateInput}
                                    type='date'
                                    name='callGenerationFromDate'
                                    value={inputValues.callGenerationFromDate}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                To{' '}
                                <input
                                    className={dateInput}
                                    type='date'
                                    name='callGenerationToDate'
                                    value={inputValues.callGenerationToDate}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th></th>
                            <th>Sub disposition Date</th>
                            <td>
                                From{' '}
                                <input
                                    className={dateInput}
                                    type='date'
                                    name='subDispositionFromDate'
                                    value={inputValues.subDispositionFromDate}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                To{' '}
                                <input
                                    className={dateInput}
                                    type='date'
                                    name='subDispositionToDate'
                                    value={inputValues.subDispositionToDate}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>

                        <tr>
                            <th></th>
                            <th>Follow up call date</th>
                            <td>
                                From{' '}
                                <input
                                    className={dateInput}
                                    type='date'
                                    name='followUpCallFromDate'
                                    value={inputValues.followUpCallFromDate}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                To{' '}
                                <input
                                    className={dateInput}
                                    type='date'
                                    name='followUpCallToDate'
                                    value={inputValues.followUpCallToDate}
                                    onChange={handleInputChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <th>Premium Suspense</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='premiumSuspense'
                                    value={inputValues.premiumSuspense}
                                    onChange={handleInputChange}
                                >
                                    <option value='all'>All</option>
                                    <option value='yes'>Yes</option>
                                    <option value='no'>No</option>
                                </select>
                            </td>
                            <th>Count of attempt</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='countOfAttempt'
                                    value={inputValues.countOfAttempt}
                                    onChange={handleInputChange}
                                >
                                    <option value=''>Select</option>
                                    <option value='1'>1</option>
                                    <option value='2'> 2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'> 10</option>
                                    <option value='greater_than_10'>&gt;10</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <th>Policy Status</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='policyStatus'
                                    value={inputValues.policyStatus}
                                    onChange={handleInputChange}
                                >
                                    <option value='all'>All</option>
                                    <option value='premiumPaying'>Premium Paying(regular)</option>
                                    <option value='paidup_annuity'>
                                        Paid up Annuity/Extended Term
                                    </option>
                                    <option value='lapsed'>Lapsed</option>
                                    <option value='riskCoverLapse'>Risk cover lapse</option>
                                    <option value='discontinued'>Discontinued</option>
                                    <option value='paidup'>Paid up</option>
                                </select>
                            </td>
                            <th>Channel</th>
                            <td>
                                <select
                                    className={inputfields}
                                    multiple
                                    style={{ width: '165px' }}
                                    name='channel'
                                    value={selectedOptions.channel}
                                    onChange={handleMultipleChange}
                                >
                                    {channels.map((channel) => (
                                        <option key={channel} value={channel}>
                                            {channel}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <th>Zone</th>
                            <td>
                                <select
                                    className={inputfields}
                                    multiple
                                    style={{ width: '165px' }}
                                    name='zone'
                                    value={selectedOptions.zone}
                                    onChange={handleMultipleChange}
                                >
                                    {zones.map((zone) => (
                                        <option key={zone} value={zone}>
                                            {zone}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <th>Annual Premium</th>
                            <td>
                                <select
                                    className={inputfields}
                                    multiple
                                    style={{ width: '165px' }}
                                    name='annualPremium'
                                    value={selectedOptions.annualPremium}
                                    onChange={handleMultipleChange}
                                >
                                    {annualPremiums.map((premium) => (
                                        <option key={premium} value={premium}>
                                            {premium}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td></td>
                            <th>Premium Frequency</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='cars'
                                >
                                    <option value='All'>All</option>
                                    <option value='Annual'>Annual</option>
                                    <option value='Semi-Annual'>Semi-Annual</option>
                                    <option value='Quarterly'>Quarterly</option>
                                    <option value='Monthly'>Monthly</option>
                                </select>
                            </td>

                            <td>

                            </td>
                        </tr>

                        {/* seven dates from and to */}

                        <tr>
                            <td></td>
                            <th>Assignment Status</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='assignmentStatus'
                                    value={inputValues.assignmentStatus}
                                    onChange={handleInputChange}
                                >
                                    
                                    <option value='' disabled>
                                        Select
                                    </option>
                                    {assignmentStatus.map((assignmentStatus) => (
                                        <option key={assignmentStatus} value={assignmentStatus}>
                                            {assignmentStatus}
                                        </option>
                                    ))}

                                </select>
                            </td>
                            <th> Currently assigned to user</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='currentlyAssigned'
                                    value={inputValues.currentlyAssigned}
                                    onChange={handleInputChange}
                                >
                                    <option value='' disabled>
                                        Select
                                    </option>
                                    {currentlyAssigned.map((currentlyAssigned) => (
                                        <option key={currentlyAssigned} value={currentlyAssigned}>
                                            {currentlyAssigned}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <th>Sub disposition</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='subDisposition'
                                    value={inputValues.subDisposition}
                                    onChange={handleInputChange}
                                >
                                    <option value='' disabled>
                                        Select
                                    </option>
                                    {subDispositions.map((subD) => (
                                        <option key={subD} value={subD}>
                                            {subD}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <th>Medical Required</th>
                            <td>
                                <select
                                    className={inputfields}
                                    style={{ width: '165px' }}
                                    name='medicalRequired'
                                    value={inputValues.medicalRequired}
                                    onChange={handleInputChange}
                                >
                                    {medicals.map((medical) => (
                                        <option key={medical} value={medical}>
                                            {medical}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={threeButtons}>
                <button onClick={handleFilter} className={button}>
                    Filter
                </button>
                <button onClick={handleClear} className={button}>
                    Clear
                </button>
                <button onClick={handleClear} className={button}>
                    Exit
                </button>
            </div>
            {results && (
                <div>
                    <h3 style={{ color: '#ea7841' }} className={title}>
                        Inbox Call Counts
                    </h3>
                    <table className='table table-bordered tabledesign'>
                        {data.map((item) => (
                            <tbody>
                                <tr>
                                    <th>New Requirement Calls</th>
                                    <td>{item.id}</td>
                                    <th>Pending Requirement</th>
                                    <td>{item.id}</td>
                                    <th>Completed Requirement</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>New Validation Calls</th>
                                    <td>{item.id}</td>
                                    <th>Pending Validation</th>
                                    <td>{item.id}</td>
                                    <th>Completed Validation </th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>New PolicyPack Calls</th>
                                    <td>{item.id}</td>
                                    <th>Pending PolicyPack</th>
                                    <td>{item.id}</td>
                                    <th>Completed PolicyPack</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>New Welcome Calls</th>
                                    <td>{item.id}</td>
                                    <th>Pending Welcome</th>
                                    <td>{item.id}</td>
                                    <th>Completed Welcome</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>New Premium Reminder Calls</th>
                                    <td>{item.id}</td>
                                    <th>Pending Premium Reminder Calls</th>
                                    <td>{item.id}</td>
                                    <th>Completed Premium Reminder Calls</th>
                                    <td>{item.id}</td>
                                </tr>
                                <tr>
                                    <th>Lapsed</th>
                                    <td>{item.id}</td>
                                    <th>Dishonoured</th>
                                    <td>{item.id}</td>
                                    <th></th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>New Surrender Calls</th>
                                    <td>{item.id}</td>
                                    <th>Pending Surrender Calls</th>
                                    <td>{item.id}</td>
                                    <th>Completed Surrender Calls</th>
                                    <td>{item.id}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                    <h3 style={{ color: '#ea7841' }} className={title}>
                        Inbox
                    </h3>
                    <table className='table table-bordered tabledesign'>
                        <thead>
                            <tr>
                                <th>Application No.</th>
                                <th>Policy Number</th>
                                <th>Disposition Status</th>
                                <th>Call Status</th>
                                <th>Receipt Date</th>
                                <th>Type Of Call</th>
                                <th>Currently Assigned To</th>
                                <th>Last Update Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => (
                                <tr>
                                    <td
                                        onClick={handleClick}
                                        style={{ color: '#007BFF', cursor: 'pointer' }}
                                    >
                                        {item.address.zipcode}
                                    </td>
                                    <td>{item.id}</td>
                                    <td>{item.id}</td>
                                    <td>{item.id}</td>
                                    <td>{item.id}</td>
                                    <td>{item.id}</td>
                                    <td>{item.id}</td>
                                    <td>{item.id}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SearchInbox;
