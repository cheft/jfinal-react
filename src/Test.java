import jdk.nashorn.api.scripting.NashornScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;


public class Test {

  public static void main(String[] args) {
    Test t = new Test();
    NashornScriptEngine nashorn = (NashornScriptEngine)new ScriptEngineManager().getEngineByName("nashorn");
    try {
        nashorn.eval(t.read("lib/npm.js"));
        nashorn.eval(t.read("lib/plyfill.js"));
        nashorn.eval(t.read("hello.js"));
    } catch (ScriptException e) {
        throw new RuntimeException(e);
    }
  }

  private Reader read(String path) {
    InputStream in = getClass().getClassLoader().getResourceAsStream(path);
    return new InputStreamReader(in);
  }

}