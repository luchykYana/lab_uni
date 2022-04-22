import {Table} from 'react-bootstrap';

import './Board.css';

const Board = () => {
    return (
        <Table bordered>
            <tbody>
            <tr>
                <th className={'bg-opacity-10 bg-primary br img'}>8</th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary bb img'}> </th>
                <th className={'bg-opacity-50 bg-primary bq img'}> </th>
                <th className={'bg-opacity-10 bg-primary bk img'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary br img'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-50 bg-primary bp img'}>7</th>
                <th className={'bg-opacity-10 bg-primary bp img'}> </th>
                <th className={'bg-opacity-50 bg-primary bp img'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary bp img'}> </th>
                <th className={'bg-opacity-50 bg-primary bp img'}> </th>
                <th className={'bg-opacity-10 bg-primary bp img'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-10 bg-primary'}>6</th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary bn img'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-50 bg-primary'}>5</th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary bp img'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary bn img'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-10 bg-primary'}>4</th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary wp img'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary wp img'}> </th>
                <th className={'bg-opacity-50 bg-primary bb img'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-50 bg-primary'}>3</th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary wp img'}> </th>
                <th className={'bg-opacity-10 bg-primary wb img'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary wp img'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-10 bg-primary wp img'}>2</th>
                <th className={'bg-opacity-50 bg-primary wp img'}> </th>
                <th className={'bg-opacity-10 bg-primary wq img'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary'}> </th>
                <th className={'bg-opacity-10 bg-primary'}> </th>
                <th className={'bg-opacity-50 bg-primary wp img'}> </th>
            </tr>
            <tr>
                <th className={'bg-opacity-50 bg-primary wr img'}>
                    <div className={'d-flex justify-content-between'}>
                        <div>1</div>
                        <div className={'mt'}>a</div>
                    </div>
                </th>
                <th className={'bg-opacity-10 bg-primary wn img'}>
                    <div className={'text-sm-end mt'}>b</div>
                </th>
                <th className={'bg-opacity-50 bg-primary wb img'}>
                    <div className={'text-sm-end mt'}>c</div>
                </th>
                <th className={'bg-opacity-10 bg-primary'}>
                    <div className={'text-sm-end mt'}>d</div>
                </th>
                <th className={'bg-opacity-50 bg-primary'}>
                    <div className={'text-sm-end mt'}>e</div>
                </th>
                <th className={'bg-opacity-10 bg-primary wk img'}>
                    <div className={'text-sm-end mt'}>f</div>
                </th>
                <th className={'bg-opacity-50 bg-primary wn img'}>
                    <div className={'text-sm-end mt'}>g</div>
                </th>
                <th className={'bg-opacity-10 bg-primary wr img text-sm-end mt'}>
                    <div className={'text-sm-end mt'}>h</div>
                </th>
            </tr>
            </tbody>
        </Table>
    );
};

export {Board};
