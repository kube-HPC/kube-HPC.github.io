---
title: Code API
sidebarTitle: Code API
layout: ../_core/DocsLayout
category: Learn
sublinks: Introduction, Python, Java, Node.js
permalink: /learn/codeapi/
next: /learn/versions/
---
# CodeAPI

## Introduction
HKUBE Code API is a set of JAVA/PYTHON/JavaScript API that you can invoke in your algorithm code in order to start sub-pipeline or algorithm  

### Python
####  Start algorithm 
Starts algorithm execution with input within the current pipeline and **waits for results**

 - start_algorithm(algorithmName, input=[], includeResult=True)
    - Args
          -  algorithmName (string): The name of the algorithm to start.
          -  input (array): Optional input for the algorithm.
          -  includeResult (bool): if True, returns the result of the algorithm execution.
             -  default: True
    - Returns
          -  Returns the result of the algorithm.

#### Start stored sub pipeline 
Starts sub-pipeline execution with input and **waits for results**

 - start_stored_subpipeline(name, flowInput={}, includeResult=True)
    - Args
          -  name (string): The name of the pipeline to start.
          -  flowInput (dict): Optional flowInput for the pipeline.
          -  includeResult (bool): if True, returns the result of the pipeline execution.
             -  default: True
    - Returns
          -  Returns the result of the pipeline.

#### Start raw sub pipeline 
Starts sub-pipeline execution with input, nodes, options, and **waits for results**

 - start_raw_subpipeline( name, nodes, flowInput, options={}, webhooks={}, includeResult=True)
    - Args
          -  name (string): The name of the pipeline to start.
          -  nodes (array): array of node definitions (like in the pipeline descriptor)
          -  options (dict): pipeline options (like in the pipeline descriptor)
          -  webhooks (dict): webhook options (like in the pipeline descriptor)
          -  flowInput (dict): Optional flowInput for the pipeline.
          -  includeResult (bool): if True, returns the result of the pipeline execution.
             -  default: True
    - Returns
          -  Returns the result of the pipeline.

#### Code example
```python
    def start(args, hkubeapi):
        input = args['input'][0]
        if input and input["action"] == "start_alg":
            ret = hkubeapi.start_algorithm("black-alg", [7], includeResult=True)
            return ret
    
        if input and input["action"] == "start_stored_subpipeline":
            ret = hkubeapi.start_stored_subpipeline("simple", {"files": {"link": "links-1"}}, includeResult=True)
            return ret
    
        if input and input["action"] == "start_raw_subpipeline":
            subPipeOp = {
                "batchTolerance": "100",
                "concurrentPipelines": {
                    "amount": "10",
                    "rejectOnFailure": "true"
                },
                "progressVerbosityLevel": "info",
                "ttl": "3600"
            }
            flowInput = {
                "files": {
                    "link": "links-1"
                }
            }
            nodes = [{"nodeName": "one",
                      "algorithmName": "green-alg",
                      "input": []},
                     {"nodeName": "two",
                      "algorithmName": "black-alg",
                      "input": ["@one"]}]
            ret = hkubeapi.start_raw_subpipeline("raw-sub-pipeline", nodes, flowInput, options=subPipeOp, webhooks={},
                                                 includeResult=True)
            return ret

    return 42
```

### Java
####  Start algorithm 
Starts algorithm execution with input within the current pipeline and **waits for results**

 - startAlgorithm(algorithmName, input, includeResult=True)
    - Args
          -  algorithmName (string): The name of the algorithm to start.
          -  input (List): Optional input for the algorithm.
          -  includeResult (bool): if True, returns the result of the algorithm execution.
    - Returns
          -  Returns the result of the algorithm (Map).

#### Start stored sub pipeline 
Starts sub-pipeline execution with input and **waits for results**

 - startStoredPipeLine(name, flowInput)
    - Args
          -  name (string): The name of the pipeline to start.
          -  flowInput (Map): Optional flowInput for the pipeline.
    - Returns
          -  Returns the result of the pipeline.

#### Start raw sub pipeline 
Starts sub-pipeline execution with input, nodes, options and **waits for results**

 - startRawSubPipeLine( name, nodes, flowInput, options, webhooks)
    - Args
          -  name (string): The name of the pipeline to start.
          -  nodes (INode[]): array of node definitions (like in the pipeline descriptor)
          -  options (Map): pipeline options (like in the pipeline descriptor)
          -  webhooks (Map): webhook options (like in the pipeline descriptor)
          -  flowInput (Map): Optional flowInput for the pipeline.
         
    - Returns
          -  Returns the result of the pipeline (Map).

#### Code example
```Java
import hkube.algo.wrapper.IAlgorithm;
import hkube.api.IHKubeAPI;
import hkube.api.INode;
import org.json.JSONObject;
import java.util.*;

public class javaCodeApi implements IAlgorithm {

    @Override
    public void Init(Map args) {

    }

    @Override
    public Object Start(Map args, IHKubeAPI hkubeAPI) throws Exception {

        Collection<Object> input = (Collection<Object>)args.get("input");
        Map action = (Map) input.iterator().next();

        String act = (String)action.get("action");

        if(act.equals("startAlg")){
            List<String> list=new ArrayList<String>();
            list.add("4");
            Object res =  hkubeAPI.startAlgorithm("green-alg",list ,true);
            return res;
        }

        if(act.equals("startStored")){
            Object res =   hkubeAPI.startStoredPipeLine("simple",new HashMap());
            return res;
        }

        if(act.equals("startRaw")){
            INode jnkNode = createNode("one","green-alg" , "42");
            INode[] nodes ={jnkNode};
            Object res =   hkubeAPI.startRawSubPipeLine("raw-pipe",nodes,new HashMap(),new HashMap(),new HashMap());
            return res;
        }

        return  42;
    }

    private INode createNode(String nodeName,String algName,String nodeInput) {
        JSONObject obj=new JSONObject();
        obj.put("input",nodeInput);
        JSONObject[] obj1 =new JSONObject[1];
        obj1[0]=obj;

        INode node = new INode() {
            @Override
            public String getName() {
                return nodeName;
            }

            @Override
            public JSONObject[] getInput() {
                return obj1;
            }

            @Override
            public void setInput(JSONObject[] input) {

            }

            @Override
            public String getAlgorithmName() {
                return algName;
            }

            @Override
            public void setAlgorithmName(String algName) {

            }

        };
        return node;
    }

    @Override
    public void Stop() {
    }

    @Override
    public void Cleanup() {
    }

}
```
####  Start algorithm  asynchronously  
Starts algorithm execution with input within the current pipeline  **and returns Future<Map>** Than will later of be filled with the result value.

 - startAlgorithmAsync(algorithmName, input, includeResult=True)
    - Args
          -  algorithmName (string): The name of the algorithm to start.
          -  input (List): Optional input for the algorithm.
          -  includeResult (bool): if True, returns the result of the algorithm execution.
    - Returns
          -  Returns a future object of  start algorithm result (Future<Map>)

#### Start stored sub pipeline asynchronously 
Starts sub-pipeline execution with input and **and returns Future<Map>** Than will later of be filled with the result value.

 - startStoredPipeLine(name, flowInput)
    - Args
          -  name (string): The name of the pipeline to start.
          -  flowInput (Map): Optional flowInput for the pipeline.
    - Returns
          -  Returns a future object of  start pipeline result (Future<Map>)


#### Start raw sub pipeline asynchronously 
Starts sub-pipeline execution with input, nodes, options and **and returns Future<Map>** Than will later of be filled with the result value.

 - startRawSubPipeLine( name, nodes, flowInput, options, webhooks)
    - Args
          -  name (string): The name of the pipeline to start.
          -  nodes (INode[]): array of node definitions (like in the pipeline descriptor)
          -  options (Map): pipeline options (like in the pipeline descriptor)
          -  webhooks (Map): webhook options (like in the pipeline descriptor)
          -  flowInput (Map): Optional flowInput for the pipeline.
         
    - Returns
          -  Returns a future object of  start pipeline result (Future<Map>)


####Code example
```Java
    import hkube.algo.wrapper.IAlgorithm;
    import hkube.api.IHKubeAPI;
    import hkube.api.INode;
    import org.json.JSONObject;
    import java.util.*;

    public class javaCodeApi implements IAlgorithm {

        @Override
        public void Init(Map args) {

        }
        private Map returnWhenExecDone(APIExecutionFuture future) {
            while (!future.isDone()) {
               try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            try {
                return future.get();
            } catch (InterruptedException | ExecutionException e) {
                throw new RuntimeException(e);
            }
        }

    @Override
    public Object Start(Map args, IHKubeAPI hkubeAPI) throws Exception {

        Collection<Object> input = (Collection<Object>)args.get("input");
        Map action = (Map) input.iterator().next();

        String act = (String)action.get("action");

        if(act.equals("startAlg")){
            List<String> list=new ArrayList<String>();
            list.add("4");
            APIExecutionFuture futureResult =  hkubeAPI.startAlgorithmAsynch("green-alg",list ,true);
            res = returnWhenExecDone (futureResult);
            return res;
        }

        if(act.equals("startStored")){
            APIExecutionFuture futureResult =   hkubeAPI.startStoredPipeLineAsynch("simple",new HashMap());
            res = returnWhenExecDone (futureResult);
            return res;
        }

        if(act.equals("startRaw")){
            INode jnkNode = createNode("one","green-alg" , "42");
            INode[] nodes ={jnkNode};
             APIExecutionFuture futureResult =   hkubeAPI.startRawSubPipeLineAsynch("raw-pipe",nodes,new HashMap(),new HashMap(),new HashMap());
            res = returnWhenExecDone (futureResult);
            return res;
        }

        return  42;
    }


    private INode createNode(String nodeName,String algName,String nodeInput) {
        JSONObject obj=new JSONObject();
        obj.put("input",nodeInput);
        JSONObject[] obj1 =new JSONObject[1];
        obj1[0]=obj;

        INode node = new INode() {
            @Override
            public String getName() {
                return nodeName;
            }

            @Override
            public JSONObject[] getInput() {
                return obj1;
            }

            @Override
            public void setInput(JSONObject[] input) {

            }

            @Override
            public String getAlgorithmName() {
                return algName;
            }

            @Override
            public void setAlgorithmName(String algName) {

            }

        };
        return node;
    }



    @Override
    public void Stop() {

    }

    @Override
    public void Cleanup() {

    }

    }    
```

### Node.js
####  Start algorithm 
Starts algorithm execution with input within the current pipeline and **waits for results**

 - startAlgorithm(algorithmName, input=[], includeResult=True)
    - Args
          -  algorithmName (string): The name of the algorithm to start.
          -  input (array): Optional input for the algorithm.
          -  includeResult (bool): if True, returns the result of the algorithm execution.
             -  default: True
    - Returns
          -  Returns the result of the algorithm.

#### Start stored sub pipeline 
Starts sub-pipeline execution with input and **waits for results**

 - startStoredSubpipeline(name, flowInput={}, includeResult=True)
    - Args
          -  name (string): The name of the pipeline to start.
          -  flowInput : Optional flowInput for the pipeline.
          -  includeResult (bool): if True, returns the result of the pipeline execution.
             -  default: True
    - Returns
          -  Returns the result of the pipeline.

#### Start raw sub pipeline 
Starts sub-pipeline execution with input, nodes, options, and **waits for results**

 -  startRawSubpipeline(name, nodes, flowInput, options = {}, webhooks = {}, includeResult = true) 
    - Args
          -  name (string): The name of the pipeline to start.
          -  nodes (array): array of node definitions (like in the pipeline descriptor)
          -  options : pipeline options (like in the pipeline descriptor)
          -  webhooks : webhook options (like in the pipeline descriptor)
          -  flowInput : Optional flowInput for the pipeline.
          -  includeResult (bool): if True, returns the result of the pipeline execution.
             -  default: True
    - Returns
          -  Returns the result of the pipeline.

#### Code example
```JavaScript
    const start = async (args, api) => {
    let ret="did zero action"

    input=args['input'][0]
    if (input.hasOwnProperty("action")){
        if (input.action == "startAlg"){
             ret = await api.startAlgorithm("green-alg",[4]);
        }
        if (input.action == "startStored"){
             ret = await api.startStoredSubpipeline("simple",{"files": {"link": "links-1"}});
        }
        if (input.action == "startRaw"){
          const subPipeOption={
               "batchTolerance": "100",
               "concurrentPipelines": {
                   "amount": "10",
                   "rejectOnFailure": "true"
               },
               "progressVerbosityLevel": "info",
               "ttl": "3600"
           }
          const flowInput = {
                         "files": {
                              "link": "links-1"
                         }
           }
          const nodes = [{"nodeName": "one",
                         "algorithmName": "green-alg",
                         "input": []},
                    {"nodeName": "two",
                         "algorithmName": "black-alg",
                         "input": ["@one"]}]

          ret = await api.startRawSubpipeline("raw-pipe",nodes,flowInput,subPipeOption);
          
          }       
    }
    return ret;
  }
  module.exports = {
    start
}
```





