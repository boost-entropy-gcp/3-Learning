import java.util.Arrays;

public class NewsFeed {

    // Instance fields
    // Constructor
    public NewsFeed(){
    }

    //getTopic()
    public String[] getTopics(){
        String[] topics = {"Opinion", "Tech", "Science", "Health"};
        return topics;
    }

    //Main
    public static void main(String[] args){
        NewsFeed sampleFeed = new NewsFeed();
        String[] topics = sampleFeed.getTopics();
        String topicsToString = Arrays.toString(topics);
        System.out.println(topicsToString); // we did not get topics, we need to_String()
    }
}
