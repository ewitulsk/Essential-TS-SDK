import {EssentialClient} from "../src/rest-client"
import {SolutionData, PredicateAddress, Mutation, Solution} from "../src/solutions"
import { fromHexString } from "../src/utils"

const LOCAL_SERVER = "http://0.0.0.0:56888"

const COUNTER_CONTRACT = "F9672B2BA18DB75EC1C72D83D641D6B5AAFB316EE9CBA474E854A59CCC2AE58F" //Replace with your own deployment
const INCREMENT_PREDICATE = "3D7ABBA5C62DF177EFD61CA9D74ED055B29267404112583FA2E4C0D98B828149" //Replace with your own deployment

test('Can call get contracts', async () => {
    let essential = new EssentialClient(LOCAL_SERVER)
    const data = await essential.getContracts(COUNTER_CONTRACT);
    console.log(data)
    //ToDo: Actual testing
  });
  

test('Can call list contracts', async () => {
    let essential = new EssentialClient(LOCAL_SERVER)
    const data = await essential.listContracts();
    console.log(data)
    //ToDo: Actual testing
});

test('Can call list predicates', async () => {
    let essential = new EssentialClient(LOCAL_SERVER)

    const data = await essential.getPredicate({
        contract: COUNTER_CONTRACT,
        predicate: INCREMENT_PREDICATE
    });

    console.log("Pred:")
    console.log(data)
    //ToDo: Actual testing
});

// test('Can submit solution', async () => {
//     console.log("Starting Submit")
//     let essential = new EssentialClient(LOCAL_SERVER)

//     let predicateAddress = {
//         contract: COUNTER_CONTRACT,
//         predicate:  INCREMENT_PREDICATE
//     } as PredicateAddress

//     let stateMut = {
//         key: [0],
//         value: [1]
//     } as Mutation

//     let solutionData = {
//         predicate_to_solve: predicateAddress,
//         decision_variables: [],
//         transient_data: [],
//         state_mutations: [stateMut]
//     } as SolutionData

//     let solution = new Solution([solutionData])

//     const data = await essential.submitSolution(solution);

//     console.log(data)
//     //ToDo: Actual testing
// });

