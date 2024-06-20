import { Action, createSelector, State, StateContext } from '@ngxs/store';
import { produce } from 'immer';
import { DashboardLastValuesModel, DashboardLastValuesStateModel, DashboardResHistorian, ItemParameters } from './dashboard-last-values.model';
import { st } from '@angular/core/src/render3';


export class SetDashboardValues {
    static readonly type = '[DashboardLastValues] SetDashboardValues';
    constructor(public payload: DashboardLastValuesModel[]) { }
}

export class ChangeLastValues {
    static readonly type = '[DashboardLastValues] ChangeLastValues';
    constructor(public tags: string, public values: ItemParameters[]) { }
}

export class ChangeLastValues1 {
    static readonly type = '[DashboardLastValues] ChangeLastValues';
    constructor(public tags: any[], public values: DashboardResHistorian[], public period : string) { }
}

export class AddValues {
    static readonly type = '[DashboardLastValues] AddValues';
    constructor(public name: string, public values: DashboardLastValuesModel) { }
}

export class ChangeValues {
    static readonly type = '[DashboardLastValues] ChangeValues';
    constructor(public name: string, public values: DashboardLastValuesModel) { }
}

@State<DashboardLastValuesModel[]>({
    name: 'dashboardLastValues',
    defaults: []
})
export class DashboardLastValuesState {
    @Action(SetDashboardValues)
    setDashboardValues(ctx: StateContext<DashboardLastValuesModel[]>, action: SetDashboardValues) {
        // bug here !!!
        //const state = ctx.getState();
        //action.payload = action.payload.filter(x => x.DataRecord && x.DataRecord.length > 0);
        ctx.setState(action.payload);
        //console.log(ctx.getState())
    }

    @Action(ChangeLastValues)
    changeLastValues(ctx: StateContext<DashboardLastValuesModel[]>, action: ChangeLastValues) {
        let state = ctx.getState();
        // action.tags[0].forEach((item) => {
        //     let lastValue = state.find(d => d.Name == item.name);
        //     let res = action.values.find(d => d.Name == item.name);
        //     if(lastValue.Mode == "Historian"){
        //         lastValue.DataRecord = res.records
        //     }
        // });
        //console.log(state);
        //ctx.setState(state);
    }

    @Action(ChangeLastValues1)
    changeLastValues1(ctx: StateContext<DashboardLastValuesModel[]>, action: ChangeLastValues1,period:string) {
        let state = ctx.getState();
        action.tags[0].forEach((item) => {
            if (state != null && action.values != null) {
                let lastValue = state.find(d => d.Name == item.name && d.Mode == "Historian");
            let res = action.values.find(d => d.Name == item.name);
            console.log(period)
         
            //console.log(lastValue);
            //console.log(res);
            if(lastValue != null && res != null && res.records !=null){
                lastValue.DataRecord = [...res.records];
            }}
        });
        //console.log(state);
        //ctx.setState(state);
    }

    @Action(AddValues)
    addValues(ctx: StateContext<DashboardLastValuesModel[]>, action: AddValues) {
        const state = ctx.getState();
        // const newState = produce(state, draft => {
        //     const groups = draft.find(d => d.RequestId === action.values.RequestId);
        //     action.values.DataSets.forEach(item => {
        //         const _item = groups.DataSets.find(g => g.ItemId === item.ItemId);
        //         if (_item) {
        //             _item.Records.push(...item.Records);
        //         }

        //     });

        // });
        // ctx.setState(newState);
    }

    @Action(ChangeValues)
    changeValues(ctx: StateContext<DashboardLastValuesModel[]>, action: ChangeValues) {
        const state = ctx.getState();
        // const newState = produce(state, draft => {
        //     const groups = draft.find(d => d.RequestId === action.values.RequestId);
        //     action.values.DataSets.forEach(item => {
        //         const _item = groups.DataSets.find(g => g.ItemId === item.ItemId);
        //         if (_item) {
        //             _item.Records = item.Records;
        //         }

        //     });

        // });
        // ctx.setState(newState);
    }

    static getLastValues(id: string) {
        return createSelector([DashboardLastValuesState], (state: DashboardLastValuesModel[]) => {
            return state;
        });
    }

    static getLastValuesRealtime(tag: string) {
        return createSelector([DashboardLastValuesState], (state: DashboardLastValuesModel[]) => {
            return state.filter(s => s.Name == tag && s.Mode === 'Realtime');
        });
    }

    static getLastValuesHistorian(tag: string) {
        return createSelector([DashboardLastValuesState], (state: DashboardLastValuesModel[]) => {
            return state.filter(s => s.Name == tag && s.Mode === 'Historian');
        });
    }

}

